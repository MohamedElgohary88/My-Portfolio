package org.example.newportfolio.components.sections.experience

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.color
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import org.example.newportfolio.models.Experience
import org.example.newportfolio.theme.fonts.*
import org.jetbrains.compose.web.css.*

@Composable
fun ExperienceCard(experience: Experience, modifier: Modifier = Modifier) {
    val colorMode = ColorMode.current
    val palette = colorMode.toPalette()

    Column(modifier = modifier) {
        // Header line: Role @ Company - Type
        SpanText(
            text = "${experience.role} @ ",
            modifier = TextStyle.toModifier(TitleTextStyle, TextStylePrimaryColor)
        )
        Link(
            path = experience.companyUrl,
            text = experience.company,
            modifier = TextStyle.toModifier(TitleTextStyle).color(palette.color)
        )
        SpanText(
            text = " - ${experience.employmentType}",
            modifier = TextStyle.toModifier(TitleTextStyle, TextStylePrimaryColor)
        )

        // Period line
        SpanText(
            text = experience.period,
            modifier = TextStyle.toModifier(LabelMediumTextStyle, TextStyleSecondaryColor).margin(top = 0.5.cssRem)
        )

        // Summary paragraph
        SpanText(
            text = experience.summary,
            modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor).margin(top = 1.5.cssRem)
        )

        // Bullets
        Column(modifier = Modifier.margin(top = 1.cssRem)) {
            experience.bullets.forEach { bullet ->
                Row(Modifier.margin(top = 0.5.cssRem)) {
                    SpanText(
                        text = "»",
                        modifier = TextStyle.toModifier(BodyLargeTextStyle).color(palette.color).margin(right = 0.75.cssRem)
                    )
                    SpanText(
                        text = bullet,
                        modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor)
                    )
                }
            }
        }

        // Skills
        if (experience.skills != null) {
            Row(modifier = Modifier.margin(top = 1.5.cssRem).flexWrap(FlexWrap.Wrap)) {
                val skills = experience.skills.split(",").map { it.trim() }
                skills.forEach { skill ->
                    SpanText(
                        text = skill,
                        modifier = TextStyle.toModifier(LabelMediumTextStyle)
                            .margin(right = 0.75.cssRem, bottom = 0.75.cssRem)
                            .padding(0.5.cssRem, 0.75.cssRem)
                            .borderRadius(12.px)
                            .backgroundColor(palette.color.toRgb().copy(alpha = 0.1f.toInt()))
                            .color(palette.color)
                            .fontWeight(FontWeight.Medium)
                    )
                }
            }
        }
    }
}
