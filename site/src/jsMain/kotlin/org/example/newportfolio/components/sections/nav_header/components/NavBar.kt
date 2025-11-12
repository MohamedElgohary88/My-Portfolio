package org.example.newportfolio.components.sections.nav_header.components

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.color
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import kotlinx.browser.document
import kotlinx.browser.window
import org.example.newportfolio.models.Section
import org.example.newportfolio.theme.brand
import org.jetbrains.compose.web.css.*
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.JustifyContent
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.functions.blur
import com.varabyte.kobweb.compose.css.functions.saturate
import org.jetbrains.compose.web.dom.Div

// Glass orb animated nav bar
@Composable
fun NavBar(selectedSectionId: String) {
    val sections = remember { Section.entries.toList() }
    val colorPalette = ColorMode.current.toPalette()
    val accentColor = colorPalette.brand.primary

    // Rect data for each nav item
    data class NavRect(val left: Double, val top: Double, val width: Double, val height: Double)

    var navRects by remember { mutableStateOf<Map<String, NavRect>>(emptyMap()) }
    var containerRect by remember { mutableStateOf<NavRect?>(null) }

    // Orb position & size state (we keep these separate so transitions apply smoothly)
    var orbLeft by remember { mutableStateOf(0.0) }
    var orbTop by remember { mutableStateOf(0.0) }
    var orbWidth by remember { mutableStateOf(0.0) }
    var orbHeight by remember { mutableStateOf(0.0) }
    var ready by remember { mutableStateOf(false) }

    // Padding inside pill around text
    val padX = 18.0 // px
    val padY = 10.0 // px

    fun measure() {
        val containerEl = document.getElementById("nav-bar-container") ?: return
        val cRect = containerEl.getBoundingClientRect()
        containerRect = NavRect(cRect.left, cRect.top, cRect.width, cRect.height)
        val newRects = mutableMapOf<String, NavRect>()
        sections.forEach { sec ->
            val el = document.getElementById("nav-${sec.id}") ?: return@forEach
            val r = el.getBoundingClientRect()
            newRects[sec.id] = NavRect(r.left, r.top, r.width, r.height)
        }
        navRects = newRects
    }

    // Initial + resize measurement
    LaunchedEffect(sections) {
        measure()
        window.setTimeout({ measure(); ready = true }, 50)
        window.addEventListener("resize", { measure() })
    }

    // Update orb target when selection changes or when rects change
    LaunchedEffect(selectedSectionId, navRects, containerRect) {
        val cRect = containerRect ?: return@LaunchedEffect
        val target = navRects[selectedSectionId] ?: return@LaunchedEffect
        val left = target.left - cRect.left - padX / 2
        val top = target.top - cRect.top - padY / 2
        orbLeft = left
        orbTop = top
        orbWidth = target.width + padX
        orbHeight = target.height + padY
    }

    // Orb modifier (glassmorphism pill)
    val orbModifier = Modifier
        .position(Position.Absolute)
        .left(orbLeft.px)
        .top(orbTop.px)
        .width(orbWidth.px)
        .height(orbHeight.px)
        .borderRadius(999.px)
        // Glass effect: semi-transparent gradient backdrop
        .backgroundColor(accentColor.toRgb().copyf(alpha = 0.18f))
        .backdropFilter(saturate(160.percent), blur(14.px))
        .boxShadow(blurRadius = 28.px, spreadRadius = 2.px, color = accentColor.toRgb().copyf(alpha = 0.28f))
        .border(width = 1.px, style = LineStyle.Solid, color = accentColor.toRgb().copyf(alpha = 0.50f))
        .transition(
            Transition.of("left", 0.38.s, TransitionTimingFunction.EaseOut),
            Transition.of("top", 0.38.s, TransitionTimingFunction.EaseOut),
            Transition.of("width", 0.38.s, TransitionTimingFunction.EaseOut),
            Transition.of("height", 0.38.s, TransitionTimingFunction.EaseOut),
            Transition.of("background-color", 0.50.s, TransitionTimingFunction.EaseInOut),
            Transition.of("box-shadow", 0.50.s, TransitionTimingFunction.EaseInOut),
            Transition.of("border-color", 0.50.s, TransitionTimingFunction.EaseInOut)
        )
        .zIndex(0)

    Row(
        modifier = Modifier
            .id("nav-bar-container")
            .fillMaxWidth()
            .position(Position.Relative)
            .overflow(Overflow.Visible)
            .justifyContent(JustifyContent.Center)
            .alignItems(AlignItems.Center)
            .padding(top = 4.px, bottom = 4.px)
            .gap(12.px),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.Center
    ) {
        // Orb sits behind text (after measurement). Render only when ready and size computed.
        if (ready && orbWidth > 0.0) {
            // Absolutely positioned glass orb
            Div(attrs = orbModifier.toAttrs()) {}
        }

        sections.forEach { sec ->
            val isSelected = sec.id == selectedSectionId
            var hovered by remember(sec.id) { mutableStateOf(false) }
            val labelColor = if (isSelected) accentColor else colorPalette.color
            val textModifier = Modifier
                .padding(left = 12.px, right = 12.px, top = 6.px, bottom = 6.px)
                .cursor(Cursor.Pointer)
                .id("nav-${sec.id}")
                .position(Position.Relative) // ensure height measured correctly
                .zIndex(1) // above orb
                .color(labelColor)
                .onClick {
                    document.getElementById(sec.id)?.asDynamic()?.scrollIntoView(js("{ behavior: 'smooth' }"))
                }
                .onMouseEnter { hovered = true }
                .onMouseLeave { hovered = false }
                .transition(
                    Transition.of("color", 0.25.s, TransitionTimingFunction.EaseInOut),
                    Transition.of("transform", 0.30.s, TransitionTimingFunction.EaseInOut)
                )
                .transform {
                    if (isSelected) scale(1.05f) else if (hovered) scale(1.04f) else scale(1.0f)
                }

            SpanText(text = sec.text, modifier = textModifier)
        }
    }
}
