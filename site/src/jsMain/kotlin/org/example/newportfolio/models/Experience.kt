package org.example.newportfolio.models

data class Experience(
    val role: String,
    val company: String,
    val companyUrl: String,
    val employmentType: String,
    val period: String,
    val summary: String,
    val bullets: List<String> = emptyList(),
    val project: String? = null,
    val skills: String? = null,
)
