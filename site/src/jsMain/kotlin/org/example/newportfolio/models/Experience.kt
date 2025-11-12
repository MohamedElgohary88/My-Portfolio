package org.example.newportfolio.models

enum class Experience(
    val number: String,
    val jobPosition: String,
    val company: String,
    val from: String,
    val to: String,
    val description: String,
    val skills: List<String>
) {
    First(
        number = "01",
        jobPosition = "Mobile Application Developer",
        company = "Inside Tech",
        from = "NOV 2023",
        to = "PRESENT",
        description = "Building high-performance, cross-platform mobile applications from scratch, ensuring code quality and seamless user experiences across Android and iOS platforms.",
        skills = listOf("Kotlin", "KMP", "Jetpack Compose", "SwiftUI", "Git", "GitHub")
    ),
    Second(
        number = "02",
        jobPosition = "Android Developer",
        company = "Hadaf",
        from = "APR 2023",
        to = "NOV 2023",
        description = "Developed and maintained Android applications, focusing on feature integration, performance optimization, and adherence to agile methodologies to meet project deadlines.",
        skills = listOf("Kotlin", "Java", "Jetpack Compose", "XML", "MVVM", "Git", "GitHub")
    ),
    Third(
        number = "03",
        jobPosition = "Android Developer",
        company = "Extranet",
        from = "JAN 2023",
        to = "APR 2023",
        description = "Contributed to the development of native Android applications, working closely with UI/UX designers to implement user-friendly interfaces and robust functionalities.",
        skills = listOf("Kotlin", "Java", "XML", "MVC", "Firebase", "Git", "GitHub")
    )
}
