package org.example.newportfolio.models

enum class Section(
    val text: String,
    val id: String,
    val href: String = "#$id",
) {
    Start(
        id = "start",
        text = "Start"
    ),
    Works(
        id = "works",
        text = "Works"
    ),
    Experience(
        id = "experience",
        text = "Experience"
    ),
    Education(
        id = "education",
        text = "Education"
    ),
    About(
        id = "about",
        text = "About me"
    ),
    Contact(
        id = "contact",
        text = "Contact me"
    )
}