package org.example.newportfolio.components.sections.experience

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.*
import com.varabyte.kobweb.compose.foundation.layout.*
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.example.newportfolio.models.Experience
import org.example.newportfolio.theme.fonts.*
import org.jetbrains.compose.web.css.*

@Composable
private fun CardContent(experience: Experience) {
    var isHovered by remember { mutableStateOf(false) }
    Column(
        modifier = Modifier
            .width(45.percent)
            .padding(20.px)
            .borderRadius(10.px)
            .border(1.px, LineStyle.Solid, Colors.LightGray)
            .onMouseEnter { isHovered = true }
            .onMouseLeave { isHovered = false }
            .thenIf(
                isHovered,
                Modifier
                    .transform { scale(1.02) }
                    .boxShadow(color = Colors.Green.copy(alpha = 30), blurRadius = 10.px, spreadRadius = 5.px)
            )
            .transition(CSSTransition("all", 0.3.s, TransitionTimingFunction.EaseInOut))
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().margin(bottom = 10.px),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            SpanText(experience.jobPosition, modifier = TextStyle.toModifier(TitleTextStyle, TextStylePrimaryColor))
            SpanText(
                "${experience.from} - ${experience.to}",
                modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStyleSecondaryColor)
            )
        }
        SpanText(
            experience.company,
            modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStyleSecondaryColor).margin(bottom = 10.px)
        )
        SpanText(
            experience.description,
            modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor).margin(bottom = 20.px)
        )
        SimpleGrid(numColumns(base = 3, sm = 4, md = 5)) {
            experience.skills.forEach { skill ->
                Box(
                    modifier = Modifier
                        .margin(top = 5.px, right = 5.px)
                        .padding(5.px)
                        .borderRadius(5.px)
                        .backgroundColor(Colors.Green.copy(alpha = 20))
                ) {
                    SpanText(skill, modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor))
                }
            }
        }
    }
}

@Composable
fun ExperienceCard(experience: Experience) {
    val isOdd = experience.number.toInt() % 2 != 0
    Box(
        modifier = Modifier
            .id("experience-card-${experience.ordinal}")
            .fillMaxWidth()
            .position(Position.Relative)
            .padding(left = 50.px, right = 50.px, top = 20.px, bottom = 20.px)
            .classNames("experience-card"),
        contentAlignment = if (isOdd) Alignment.CenterStart else Alignment.CenterEnd
    ) {
        CardContent(experience)
    }
}