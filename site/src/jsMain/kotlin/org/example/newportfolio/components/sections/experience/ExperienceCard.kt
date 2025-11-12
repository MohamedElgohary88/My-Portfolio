package org.example.newportfolio.components.sections.experience

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.*
import com.varabyte.kobweb.compose.foundation.layout.*
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import org.example.newportfolio.models.Experience
import org.example.newportfolio.theme.brand
import org.example.newportfolio.theme.fonts.*
import org.jetbrains.compose.web.css.*
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.overlay
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint

@Composable
private fun CardContent(experience: Experience) {
    var isHovered by remember { mutableStateOf(false) }
    val palette = ColorMode.current.toPalette()
    val bp = rememberBreakpoint()
    Column(
        modifier = Modifier
            .then(
                if (bp >= Breakpoint.LG) Modifier.width(45.percent) else Modifier.fillMaxWidth().maxWidth(95.percent)
            )
            .padding(if (bp >= Breakpoint.LG) 20.px else 16.px)
            .borderRadius(12.px)
            .border(1.px, LineStyle.Solid, palette.overlay)
            .onMouseEnter { isHovered = true }
            .onMouseLeave { isHovered = false }
            .thenIf(
                isHovered,
                Modifier
                    .transform { translateY((-6).px); scale(1.015) }
                    .boxShadow(color = palette.brand.primary.toRgb().copyf(alpha = 0.4f), blurRadius = 18.px, spreadRadius = 4.px)
            )
            .transition(
                Transition.of("transform", 0.28.s, TransitionTimingFunction.EaseInOut),
            )    ) {
        Row(
            modifier = Modifier.fillMaxWidth().margin(bottom = 10.px),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            SpanText(experience.jobPosition, modifier = TextStyle.toModifier(ExperienceTitleTextStyle, TextStylePrimaryColor))
            // show "from - to (duration)"
            SpanText(
                "${experience.from} - ${experience.to} (${experience.formattedDuration})",
                modifier = TextStyle.toModifier(ExperienceDateTextStyle, TextStyleSecondaryColor)
            )
        }
        SpanText(
            experience.company,
            modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStyleSecondaryColor).margin(bottom = 10.px)
        )
        // Render each sentence on its own line (split by '.')
        Column(modifier = Modifier.margin(bottom = 20.px)) {
            experience.description
                .split('.')
                .map { it.trim() }
                .filter { it.isNotEmpty() }
                .forEach { sentence ->
                    SpanText(
                        text = "$sentence.",
                        modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor)
                            .margin(bottom = 6.px)
                    )
                }
        }
        SimpleGrid(numColumns(base = 3, sm = 4, md = 5)) {
            experience.skills.forEach { skill ->
                Box(
                    modifier = Modifier
                        .margin(top = 5.px, right = 5.px)
                        .padding(6.px)
                        .borderRadius(6.px)
                        .backgroundColor(palette.overlay)
                ) {
                    SpanText(skill, modifier = TextStyle.toModifier(ExperienceChipTextStyle, TextStylePrimaryColor))
                }
            }
        }
    }
}

@Composable
fun ExperienceCard(experience: Experience) {
    val bp = rememberBreakpoint()
    val isOdd = experience.number.toInt() % 2 != 0
    Box(
        modifier = Modifier
            .id("experience-card-${experience.ordinal}")
            .fillMaxWidth()
            .position(Position.Relative)
            .padding(
                left = if (bp >= Breakpoint.LG) 50.px else 12.px,
                right = if (bp >= Breakpoint.LG) 50.px else 12.px,
                top = 20.px,
                bottom = 20.px
            )
            .classNames("experience-card"),
        contentAlignment = if (bp >= Breakpoint.LG) (if (isOdd) Alignment.CenterStart else Alignment.CenterEnd) else Alignment.Center
    ) {
        CardContent(experience)
    }
}