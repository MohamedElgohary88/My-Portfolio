@file:Suppress("DEPRECATION")
package org.example.newportfolio.components.sections.nav_header.components

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.css.ListStyleType
import com.varabyte.kobweb.compose.css.TextDecorationLine
import com.varabyte.kobweb.compose.css.autoLength
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.navigation.LinkStyle
import com.varabyte.kobweb.silk.components.style.*
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.thenIf
import com.varabyte.kobweb.silk.theme.colors.palette.overlay
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import com.varabyte.kobweb.silk.theme.colors.shifted
import org.example.newportfolio.models.Section
import org.example.newportfolio.theme.fonts.TextStyle
import org.example.newportfolio.theme.fonts.LabelLargeTextStyle
import org.example.newportfolio.theme.text
import org.example.newportfolio.theme.brand
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Nav
import org.jetbrains.compose.web.dom.Text
import kotlinx.browser.document
import kotlinx.browser.window
import com.varabyte.kobweb.compose.css.functions.blur
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent

val NavBarStyle by ComponentStyle {
    val colorPalette = colorMode.toPalette()
    base {
        Modifier
            .size(autoLength)
            .background(colorPalette.overlay)
            .borderRadius(30.px)
            .listStyle(ListStyleType.None)
            .display(DisplayStyle.Flex)
            .justifyContent(JustifyContent.Center)
            .flex(1)
            .position(Position.Relative) // anchor for absolute indicator
    }
}

@Composable
fun NavBar(
    selectedSectionId: String
) {
    var indicatorLeft by remember { mutableStateOf(0.px) }
    var indicatorWidth by remember { mutableStateOf(12.px) } // orb size
    var mouseX by remember { mutableStateOf(0.0) }

    DisposableEffect(Unit) {
        val listener: (Event) -> Unit = { e ->
            val me = e as? MouseEvent
            if (me != null) mouseX = me.clientX.toDouble()
        }
        window.addEventListener("mousemove", listener)
        onDispose { window.removeEventListener("mousemove", listener) }
    }

    Nav(
        attrs = NavBarStyle.toAttrs()
    ) {
        SideEffect {
            val activeEl = document.querySelector("a[href='#$selectedSectionId']")
            val navEl = activeEl?.closest("nav") ?: document.querySelector("nav")
            if (activeEl != null && navEl != null) {
                val rect = activeEl.getBoundingClientRect()
                val navRect = navEl.getBoundingClientRect()
                val circle = 12.0
                val center = rect.left + rect.width / 2.0
                val leftPx = center - navRect.left - (circle / 2.0)
                indicatorLeft = leftPx.px
                indicatorWidth = circle.px
            }
        }
        val parallax = ((mouseX / 50.0) % 6.0) - 3.0 // -3..+3
        Box(
            modifier = Modifier
                .position(Position.Absolute)
                .top(50.percent)
                .left(indicatorLeft)
                .width(indicatorWidth)
                .height(indicatorWidth)
                .borderRadius(50.percent)
                .backgroundColor(Color.rgba(255,255,255,0.12f))
                .border(width = 1.px, style = LineStyle.Solid, color = Color.rgba(255,255,255,0.28f))
                .backdropFilter(blur(10.px))
                .boxShadow(blurRadius = 18.px, spreadRadius = 5.px, color = Color.rgba(r = 190, g = 25, b = 228, a = 0.35f))
                .transform { translateY((-50).percent); translateX(parallax.px) }
                .transition(
                    CSSTransition("left", 0.45.s, TransitionTimingFunction.EaseInOut),
                    CSSTransition("width", 0.2.s, TransitionTimingFunction.EaseInOut),
                    CSSTransition("box-shadow", 0.45.s, TransitionTimingFunction.EaseInOut)
                )
        )
        Section.entries.forEach { section ->
            NavBarLink(
                href = section.href,
                text = section.text,
                selected = section.id == selectedSectionId,
            )
        }
    }
}


val NavBarLinkVariant = LinkStyle.addVariant(extraModifiers = {
    TextStyle.toModifier(LabelLargeTextStyle)
}) {
    val colorPalette = colorMode.toPalette()
    base {
        Modifier
            .alignContent(AlignContent.Center)
            .color(colorPalette.text.primary)
            .background(colorPalette.overlay)
            .borderRadius(r = 30.px)
            .textDecorationLine(TextDecorationLine.None)
            .transition(CSSTransition("0.2s"))
    }
    hover {
        Modifier.background(colorPalette.overlay.shifted(colorMode, 0.1f))
    }
    active {
        Modifier.background(colorPalette.overlay.shifted(colorMode, 0.15f))
    }
    Breakpoint.LG {
        Modifier.size(width = 12.2.em, height = 3.6.em) // reduced width & height
    }
    Breakpoint.XL {
        Modifier.size(width = 12.5.em, height = 3.7.em) // reduced width & height
    }
}

val ActiveNavBarLinkVariant = LinkStyle.addVariant {
    val colorPalette = colorMode.toPalette()
    base {
        Modifier
            .color(colorPalette.brand.onPrimary)
            .background(colorPalette.brand.primary)
            .backgroundColor(colorPalette.brand.primary)
            .transition(CSSTransition("0.1s"))
    }
    hover {
        Modifier.background(colorPalette.brand.primary)
    }
}

@Composable
private fun NavBarLink(
    href: String,
    text: String,
    selected: Boolean,
) {
    Link(
        path = href,
        variant = NavBarLinkVariant.thenIf(selected, ActiveNavBarLinkVariant),
    ) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Text(text)
        }
    }
}