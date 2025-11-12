package org.example.newportfolio.components.sections.education

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.TextDecorationLine
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.layout.numColumns
import com.varabyte.kobweb.silk.components.style.addVariant
import com.varabyte.kobweb.silk.components.style.toModifier // reverted to components.style for ComponentStyle variants
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.window // added for opening credential links
import org.example.newportfolio.components.widgets.section.SectionContainer
import org.example.newportfolio.components.widgets.section.SectionContainerStyle
import org.example.newportfolio.models.Section
import org.example.newportfolio.theme.fonts.*
import org.jetbrains.compose.web.css.*

// Data models
private data class EducationEntry(
    val school: String,
    val degree: String,
    val date: String? = null,
    val description: String,
)

private data class CertificationEntry(
    val title: String,
    val issuer: String,
    val date: String? = null,
    val credentialId: String? = null,
    val featured: Boolean = false,
)

// Sample data (hard-coded as requested)
private val educationEntries = listOf(
    EducationEntry(
        school = "Arab Open University (AOU)",
        degree = "Bachelor's degree, Computer Science",
        description = "Studying computer science with a strong focus on software development, data structures & algorithms, database management, and computer networks. Gaining hands-on experience in object-oriented programming (OOP), web & mobile development, and software engineering principles. Developing problem-solving skills through real-world projects and research, while staying up to date with the latest trends in AI, cybersecurity, and cloud computing."
    ),
    EducationEntry(
        school = "Open Source Society University",
        degree = "Bachelor's degree, Computer Science",
        date = "Jul 2021 - Sep 2023",
        description = "Highly motivated and results-oriented Computer Science graduate with a strong foundation in programming languages, algorithms, and data structures. Eager to leverage my skills and knowledge to contribute to innovative software solutions in a fast-paced environment."
    ),
)

private val certificationEntries = listOf(
    CertificationEntry(
        title = "Meta Android Developer Professional Certificate",
        issuer = "Meta",
        date = "Issued Aug 2024",
        credentialId = "https://www.coursera.org/account/accomplishments/professional-cert/C96GSAQ4LM4S",
        featured = true
    ),
    CertificationEntry(
        title = "Advanced Android Kotlin development",
        issuer = "egFWD",
        date = "Issued Jan 2023",
        credentialId = "https://confirm.udacity.com/YRSGTK4G",
        featured = true
    ),
    CertificationEntry(
        title = "Google IT Support Professional Certificate",
        issuer = "Google",
        date = "Issued Apr 2022",
        featured = true
    ),
    CertificationEntry(
        title = "The Complete 2024 Software Testing Bootcamp",
        issuer = "Udemy",
        date = "Issued Aug 2024",
        credentialId = "https://www.udemy.com/certificate/UC-547558a4-711d-4e02-bcd6-60c43e568860/",
        featured = true
    ),
    CertificationEntry(
        title = "Introduction to Software Testing Concepts & Techniques",
        issuer = "Information Technology Institute (ITI)",
        date = "Issued Aug 2024",
        credentialId = "1Zmj3bQvhtuWs6JQd8RghsPMfOoQka7Da",
        featured = true
    ),
    CertificationEntry(
        title = "CS50",
        issuer = "Harvard University",
        date = "Issued Sep 2021",
        featured = true
    ),
    CertificationEntry(
        title = "Dart Programming Language And OOP",
        issuer = "Udemy",
        date = "Issued Aug 2024",
        credentialId = "https://www.udemy.com/certificate/UC-e3c9ccdd-5db0-420f-a9be-06c3d4b24db7",
        featured = true
    ),
    CertificationEntry(
        title = "Android Apps Development Training",
        issuer = "The Chance",
        date = "Issued Feb 2023",
        featured = true
    ),
    CertificationEntry(
        title = "Career Essentials in Software Development by Microsoft and LinkedIn",
        issuer = "Microsoft",
        featured = true
    ),
    CertificationEntry(
        title = "Android Development Track",
        issuer = "Udacity",
        date = "Issued Aug 2022",
        featured = true
    ),
    CertificationEntry(
        title = "SPECIALIZATION UI/UX Design",
        issuer = "Edraak إدراك",
        date = "Issued Jan 2022",
        featured = true
    ),
    // Foundation Courses
    CertificationEntry(title = "Software Testing Foundations: Test Techniques", issuer = "LinkedIn", date = "Aug 2024"),
    CertificationEntry(title = "Small Talk for Non-Native English Speakers", issuer = "LinkedIn", date = "Jan 2023"),
    CertificationEntry(title = "Android Development: Retrofit with Kotlin", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Become an Android Mobile App Developer", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Effective Android Testing for Mobile Developers", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Git Essential Training: The Basics", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Learning Git and GitHub", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: APIs and Web Services", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Algorithms", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Beyond the Fundamentals", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Data Structures", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Databases", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Design Patterns", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Fundamentals", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Object-Oriented Design", issuer = "LinkedIn", date = "Jun 2022"),
    CertificationEntry(title = "Programming Foundations: Software Testing/QA", issuer = "LinkedIn", date = "Jun 2022"),
)

// Styles
val EducationCardStyle by SectionContainerStyle.addVariant {
    base { Modifier }
}

@Composable
private fun EducationCard(entry: EducationEntry, modifier: Modifier = Modifier) {
    val hovered = remember { mutableStateOf(false) }
    Column(
        modifier = modifier
            .padding(20.px)
            .borderRadius(12.px)
            .border(1.px, LineStyle.Solid, Colors.LightGray)
            .backgroundColor(Colors.Transparent)
            .onMouseEnter { hovered.value = true }
            .onMouseLeave { hovered.value = false }
            .thenIf(hovered.value, Modifier.boxShadow(color = Colors.Green.copy(alpha = 30), blurRadius = 12.px, spreadRadius = 2.px))
            .transition(Transition.of("all", 0.25.s, TransitionTimingFunction.EaseInOut))
            .maxWidth(100.percent)
    ) {
        SpanText(entry.school, modifier = TextStyle.toModifier(TitleTextStyle, TextStylePrimaryColor).margin(bottom = 8.px))
        SpanText(entry.degree + (entry.date?.let { " | $it" } ?: ""), modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStyleSecondaryColor).margin(bottom = 12.px))
        SpanText(entry.description, modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor))
    }
}

@Composable
private fun CertificationCard(entry: CertificationEntry, modifier: Modifier = Modifier) {
    val hovered = remember { mutableStateOf(false) }
    Column(
        modifier = modifier
            .padding(16.px)
            .borderRadius(10.px)
            .border(1.px, LineStyle.Solid, Colors.LightGray)
            .onMouseEnter { hovered.value = true }
            .onMouseLeave { hovered.value = false }
            .thenIf(hovered.value, Modifier.boxShadow(color = Colors.Green.copy(alpha = 25), blurRadius = 10.px, spreadRadius = 2.px))
            .transition(Transition.of("all", 0.25.s, TransitionTimingFunction.EaseInOut))
            .backgroundColor(Colors.Transparent)
    ) {
        SpanText(entry.title, modifier = TextStyle.toModifier(TitleTextStyle, TextStylePrimaryColor).margin(bottom = 6.px))
        SpanText(entry.issuer + (entry.date?.let { " | $it" } ?: ""), modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStyleSecondaryColor).margin(bottom = 12.px))
        if (entry.credentialId != null) {
            LinkButton(text = "Show Credential", href = entry.credentialId)
        }
    }
}

@Composable
private fun LinkButton(text: String, href: String) {
    SpanText(
        text,
        modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStylePrimaryColor)
            .cursor(Cursor.Pointer)
            .onClick { window.open(href, "_blank") } // use kotlinx.browser.window
            .textDecorationLine(TextDecorationLine.Underline)
    )
}

@Composable
private fun FoundationCourseItem(entry: CertificationEntry) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(topBottom = 6.px)
    ) {
        SpanText(entry.title, modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor))
        SpanText(
            " - ${entry.issuer}" + (entry.date?.let { " (${it})" } ?: ""),
            modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStyleSecondaryColor).margin(left = 4.px)
        )
    }
}

@Composable
fun EducationSection() {
    val featured = certificationEntries.filter { it.featured }
    val foundation = certificationEntries.filter { !it.featured }
    val showAllFoundation = remember { mutableStateOf(false) }

    SectionContainer(section = Section.Education, modifier = Modifier.id("education")) {
        Column(modifier = Modifier.fillMaxWidth().padding(top = 80.px, bottom = 20.px), horizontalAlignment = Alignment.CenterHorizontally) {
            SpanText("Education & Certifications", modifier = TextStyle.toModifier(DisplayTextStyle, TextStylePrimaryColor))
            SpanText("My academic background and professional credentials", modifier = TextStyle.toModifier(SubDisplayTextStyle, TextStyleSecondaryColor).margin(top = 12.px))
        }

        Column(modifier = Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(28.px)) {
            SpanText("My Education", modifier = TextStyle.toModifier(TitleTextStyle, TextStylePrimaryColor).margin(bottom = 8.px)) // replaced HeadlineLargeTextStyle
            educationEntries.forEach { entry ->
                EducationCard(entry = entry)
            }
        }

        Column(modifier = Modifier.fillMaxWidth().padding(top = 60.px)) {
            SpanText("Licenses & Certifications", modifier = TextStyle.toModifier(TitleTextStyle, TextStylePrimaryColor))
            SpanText("Featured Certifications", modifier = TextStyle.toModifier(TitleTextStyle, TextStyleSecondaryColor).margin(top = 12.px, bottom = 24.px))
            SimpleGrid(numColumns(base = 1, sm = 2, md = 3, lg = 3)) {
                featured.forEach { cert ->
                    Box(modifier = Modifier.margin(10.px)) { // add spacing around each card
                        CertificationCard(entry = cert, modifier = Modifier.fillMaxWidth())
                    }
                }
            }
            Column(modifier = Modifier.fillMaxWidth().padding(top = 20.px)) {
                SpanText("Foundation Courses", modifier = TextStyle.toModifier(TitleTextStyle, TextStyleSecondaryColor).margin(bottom = 12.px))
                val displayed = if (showAllFoundation.value) foundation else foundation.take(6)
                displayed.forEach { fc -> FoundationCourseItem(entry = fc) }
                if (!showAllFoundation.value && foundation.size > 6) {
                    SpanText(
                        "Show More", modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStylePrimaryColor)
                            .cursor(Cursor.Pointer)
                            .margin(top = 12.px)
                            .onClick { showAllFoundation.value = true }
                            .textDecorationLine(TextDecorationLine.Underline)
                    )
                }
            }
        }
    }
}