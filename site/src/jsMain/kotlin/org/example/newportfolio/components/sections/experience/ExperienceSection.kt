@file:Suppress("DEPRECATION")

package org.example.newportfolio.components.sections.experience

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.*
import com.varabyte.kobweb.compose.foundation.layout.*
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.color
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import kotlinx.coroutines.delay
import org.example.newportfolio.components.widgets.section.SectionContainer
import org.example.newportfolio.models.Experience
import org.example.newportfolio.models.Section
import org.example.newportfolio.theme.fonts.*
import org.jetbrains.compose.web.css.*

private val experiences = listOf(
    Experience(
        role = "Mobile Application Developer",
        company = "Inside Tech",
        companyUrl = "#",
        employmentType = "Full-time",
        period = "Nov 2024 - Present · Jordan · Remote",
        summary = "Building and maintaining high-performance mobile apps using Kotlin, MVVM, Jetpack Components, and Retrofit. Collaborating with cross-functional teams to develop scalable and user-friendly applications. Ensuring code quality with unit testing (JUnit, MockK, Espresso) and optimizing app performance. Passionate about modern Android development, Jetpack Compose, and Coroutines.",
        bullets = listOf(
            "Agile Collaboration: Worked with backend teams using Agile methodologies to ensure timely delivery and client satisfaction.",
            "Feature Integration: Developed and integrated key features such as room booking, staff management, and reporting into a Hotel Management System UI using Jetpack Compose.",
            "Performance Optimization: Improved app speed by 25% through advanced caching and data synchronization techniques."
        ),
        project = "Hotel X — An Android tablet project using Jetpack Compose, Kotlin, MVVM, Retrofit, and Kotlin Coroutines to manage hotel systems (rooms, beds, guests, reservations, staff, and tasks). Designed and implemented screens with the team and fixed bugs.",
        skills = "Mobile Application Development,Android Framework,Mobile Product Development,Kotlin,Android Development,KMP,Kotlin Multiplatform,Compose,Flutter,Dart,BLoC,Software Testing,Android Testing,Manual Testing,Unit Testing,Retrofit,OkHttp,Koin,Dependency Injection,Data Structures,Algorithms"
    ),
    Experience(
        role = "Android Developer",
        company = "The Chance",
        companyUrl = "#",
        employmentType = "Internship",
        period = "Feb 2023 - Sep 2023 · 8 mos",
        summary = "Mastered Android development with Kotlin, OOP, Git, Design Patterns, Compose, Android SDK, and advanced Android concepts. Excelled in architectural paradigms such as MVC, MVP, MVVM, and Clean Architecture.",
        bullets = listOf(
            "Effective Team Leadership: Successfully led three projects, showcasing strong leadership and project management abilities and driving projects to completion."
        ),
        skills = "Animation,Data Structures,Kotlin Coroutines,Software Design Patterns,User Interface Design,SOLID Design Principles,Kotlin,RxJava,Android Jetpack,Figma,Object-Oriented Programming (OOP),Algorithms,Android"
    ),
    Experience(
        role = "Android Developer",
        company = "egFWD",
        companyUrl = "#",
        employmentType = "Internship",
        period = "Sep 2022 - Dec 2022 · 4 mos",
        summary = "Acquired advanced skills in contemporary Android app development during Udacity's Advanced Android Kotlin Development Nanodegree.",
        bullets = listOf(
            "Actively developed Android projects utilizing the latest tools and technologies.",
            "Mastered UI design, seamless RESTful API integration, and robust MVVM architecture, resulting in user-centric and responsive projects."
        ),
        skills = "Kotlin Coroutines,Flow,Kotlin,Google Maps,MVVM,Android SDK,Android"
    )
)

@Composable
fun ExperienceSection() {
    val breakpoint = rememberBreakpoint()
    var selectedIndex by remember { mutableStateOf(0) }
    var selectedExperienceVisible by remember { mutableStateOf(true) }

    LaunchedEffect(selectedIndex) {
        selectedExperienceVisible = false
        delay(150)
        selectedExperienceVisible = true
    }

    SectionContainer(
        modifier = Modifier.padding(top = 8.5.cssRem),
        section = Section.Experience,
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TextContent(breakpoint)

        Row(
            modifier = Modifier.margin(top = 3.cssRem).fillMaxWidth(),
            verticalAlignment = Alignment.Top
        ) {
            if (breakpoint >= Breakpoint.MD) {
                // Desktop: Vertical Tabs
                VerticalTabs(selectedIndex) { selectedIndex = it }
            } else {
                // Mobile: Horizontal Tabs
                HorizontalTabs(selectedIndex) { selectedIndex = it }
            }

            // Content Panel
            Box(
                modifier = Modifier.fillMaxWidth()
                    .padding(left = if (breakpoint >= Breakpoint.MD) 2.cssRem else 0.cssRem)
            ) {
                ExperienceCard(
                    experience = experiences[selectedIndex],
                    modifier = Modifier
                        .opacity(if (selectedExperienceVisible) 100 else 0)
                        .transform { if (selectedExperienceVisible) translate(0.px) else translateY(10.px) }
                        .transition(CSSTransition("all", 200.ms))
                )
            }
        }
    }
}

@Composable
private fun TextContent(breakpoint: Breakpoint) {
    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        SpanText(
            modifier = TextStyle.toModifier(DisplayTextStyle, TextStylePrimaryColor).textAlign(TextAlign.Center),
            text = "Experience"
        )
        SpanText(
            modifier = TextStyle.toModifier(SubDisplayTextStyle, TextStyleSecondaryColor)
                .maxWidth(if (breakpoint >= Breakpoint.SM) 75.percent else 100.percent)
                .margin(top = 1.cssRem)
                .textAlign(TextAlign.Center),
            text = "Professional experience and internships"
        )
    }
}

@Composable
private fun VerticalTabs(selectedIndex: Int, onTabClick: (Int) -> Unit) {
    val colorMode = ColorMode.current
    val palette = colorMode.toPalette()

    Box(modifier = Modifier.position(Position.Relative)) {
        // Sliding Indicator
        Box(
            modifier = Modifier
                .width(2.px)
                .height(42.px)
               // .backgroundColor(palette)
                .position(Position.Absolute)
                .top(0.px)
                .left(0.px)
               // .transform { translateX((selectedIndex * 42).px) }
                .transition(CSSTransition("transform", 300.ms, TransitionTimingFunction.Ease))
        )

        Column(
            modifier = Modifier.padding(left = 1.5.cssRem),
            horizontalAlignment = Alignment.Start
        ) {
            experiences.forEachIndexed { index, experience ->
                Box(
                    modifier = Modifier
                      //  .padding(vertical = 1.cssRem)
                        .height(20.px)
                        .cursor(Cursor.Pointer)
                        .onClick { onTabClick(index) }
                ) {
                    SpanText(
                        text = experience.company,
                        modifier = TextStyle.toModifier(BodyLargeTextStyle)
                            .color(palette.color)
                            // if (selectedIndex == index) palette else palette.color.toRgb().copy(alpha = 0.5f.toInt())
                            .transition(CSSTransition("color", 200.ms))
                    )
                }
            }
        }
    }
}

@Composable
private fun HorizontalTabs(selectedIndex: Int, onTabClick: (Int) -> Unit) {
    val colorMode = ColorMode.current
    val palette = colorMode.toPalette()

    Row(
        modifier = Modifier.fillMaxWidth().margin(bottom = 1.5.cssRem).overflow(Overflow.Auto),
        verticalAlignment = Alignment.CenterVertically
    ) {
        experiences.forEachIndexed { index, experience ->
            Box(
                modifier = Modifier
                    .padding(
                        top = 0.75.cssRem,
                        right = 1.5.cssRem,
                        bottom = 0.75.cssRem,
                        left = 1.5.cssRem
                    )
                    .cursor(Cursor.Pointer)
                    .onClick { onTabClick(index) }
            ) {
                SpanText(
                    text = experience.company,
                    modifier = TextStyle.toModifier(BodyLargeTextStyle).color(palette.color)
                      //  if (selectedIndex == index) palette else palette.color.toRgb().copy(alpha = 0.5f.toInt())
                        .fontWeight(if (selectedIndex == index) FontWeight.SemiBold else FontWeight.Normal)
                        .borderBottom(
                            width = if (selectedIndex == index) 2.px else 0.px,
                            style = LineStyle.Solid,
                            color = (if (selectedIndex == index) palette else Color.transparent) as CSSColorValue?
                        )
                        .padding(bottom = 0.5.cssRem)
                        .transition(CSSTransition("all", 200.ms))
                )
            }
        }
    }
}
