package org.example.newportfolio.components.sections.experience

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.CSSTransition
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import kotlinx.browser.document
import org.example.newportfolio.models.Experience
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.s
import org.w3c.dom.Element
import org.w3c.dom.asList

@Composable
fun ExperienceSection() {
    var activeExperience by remember { mutableStateOf(Experience.First) }

    Box(
        modifier = Modifier
            .id("experience") // <-- ADDED THIS LINE
            .classNames("section-container") // added so NavHeader can detect this section
            .fillMaxWidth()
            .padding(topBottom = 100.px)
            .position(Position.Relative),
        contentAlignment = Alignment.Center
    ) {
        // The vertical timeline
        Box(
            modifier = Modifier
                .position(Position.Absolute)
                .top(0.px)
                .bottom(0.px)
                .width(2.px)
                .backgroundColor(Colors.LightGray)
        )
        // The moving dot
        Box(
            modifier = Modifier
                .position(Position.Absolute)
                .top(0.px)
                .left(50.percent)
                .transform { translateX((-50).percent) }
                .size(16.px)
                .borderRadius(50.percent)
                .backgroundColor(Colors.Green)
                .border(2.px, LineStyle.Solid, Colors.White)
                .margin(top = (35 + activeExperience.ordinal * 130).px) // Approximate card height
                .transition(CSSTransition("margin-top", 0.3.s, TransitionTimingFunction.EaseInOut))
        )
        Column(
            modifier = Modifier.fillMaxWidth()
        ) {
            Experience.entries.forEach { experience ->
                ExperienceCard(experience = experience)
            }
        }
    }

    SideEffect {
        val onIntersection = { entries: Array<dynamic> ->
            entries.forEach { entry ->
                if (entry.isIntersecting as Boolean) {
                    val cardId = (entry.target as? Element)?.id
                    if (cardId != null && cardId.startsWith("experience-card-")) {
                        val experienceIndex = cardId.substringAfter("experience-card-").toIntOrNull()
                        if (experienceIndex != null) {
                            activeExperience = Experience.entries[experienceIndex]
                        }
                    }
                }
            }
        }

        val observer = js("new IntersectionObserver(onIntersection, { threshold: 0.5 })")
        document.querySelectorAll(".experience-card").asList().forEach { node ->
            (node as? Element)?.let {
                observer.observe(it)
            }
        }
    }
}
