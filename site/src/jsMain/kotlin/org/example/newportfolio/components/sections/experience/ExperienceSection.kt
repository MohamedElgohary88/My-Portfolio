package org.example.newportfolio.components.sections.experience

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.Transition
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
    val visibleStates = remember { mutableStateListOf<Boolean>().apply { repeat(Experience.entries.size) { add(false) } } }

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
                .size(10.px)
                .borderRadius(50.percent)
                .backgroundColor(Colors.Green)
                .border(2.px, LineStyle.Solid, Colors.White)
                .margin(top = (35 + activeExperience.ordinal * 130).px)
                .transition(Transition.of("margin-top", 0.3.s, TransitionTimingFunction.EaseInOut))
        )
        Column(
            modifier = Modifier.fillMaxWidth()
        ) {
            Experience.entries.forEachIndexed { index, experience ->
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .margin(bottom = if (index == Experience.entries.lastIndex) 0.px else 40.px) // added spacing
                        .let {
                            if (visibleStates[index]) {
                                it
                                    .opacity(1)
                                    .transform { translateY(0.px) }
                            } else {
                                it
                                    .opacity(0)
                                    .transform { translateY(25.px) }
                            }
                        }
                        .transition(
                            Transition.of("opacity", 0.6.s, TransitionTimingFunction.Ease),
                            Transition.of("transform", 0.6.s, TransitionTimingFunction.Ease)
                        )
                ) {
                    ExperienceCard(experience = experience)
                }
            }
        }
    }

    SideEffect {
        val onIntersection = { entries: Array<dynamic> ->
            entries.forEach { entry ->
                val el = entry.target as? Element
                if ((entry.isIntersecting as Boolean) && el != null && el.classList.contains("experience-card")) {
                    val id = el.id
                    if (id.startsWith("experience-card-")) {
                        val idx = id.substringAfter("experience-card-").toIntOrNull()
                        if (idx != null) {
                            activeExperience = Experience.entries[idx]
                            visibleStates[idx] = true
                        }
                    }
                }
            }
        }
        // Observer with a bit earlier trigger for nicer animation
        val observer = js("new IntersectionObserver(onIntersection, { threshold: 0.35 })")
        document.querySelectorAll(".experience-card").asList().forEach { node ->
            (node as? Element)?.let { observer.observe(it) }
        }
    }
}
