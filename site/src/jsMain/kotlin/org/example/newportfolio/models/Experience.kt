package org.example.newportfolio.models

import kotlinx.browser.window
import kotlin.js.Date

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
        from = "Aug 2024",
        to = "PRESENT",
        description = "Developing two production-ready mobile applications using Kotlin Multiplatform, Flutter,\n" +
                "and Jetpack Compose, applying Clean Architecture and reusable UI components.\n" +
                "Delivering scalable features in collaboration with backend/design teams.\n" +
                "Improved app performance by 25% through smart caching and background sync strategies.\n" +
                "Apply Clean Architecture and create reusable UI components.\n" +
                "Developed core features such as room booking, staff management, and reporting of a hotel\n" +
                "management app using Jetpack Compose and MVVM.\n" +
                "Collaborated in Agile sprints with backend developers to ensure smooth integrations.",
        skills = listOf("Kotlin", "KMP", "Jetpack Compose", "SwiftUI", "Git", "GitHub","Flutter","Dart")
    ),
    Second(
        number = "02",
        jobPosition = "Software Engineer Intern",
        company = "Manara",
        from = "Dec 2023",
        to = "Jun 2024",
        description = "Focused on advanced algorithms, data structures, and problem-solving.\n" +
                "Enhanced critical thinking and technical skills through hands-on coding challenges on LeetCode.",
        skills = listOf("Kotlin", "Java", "Jetpack Compose", "XML", "MVVM", "Git", "GitHub")
    ),
    Third(
        number = "03",
        jobPosition = "Android Developer Intern",
        company = "The Chance",
        from = "JAN 2023",
        to = "Oct 2023",
        description = "Designed and developed native Android and cross-platform mobile applications.\n" +
                "Led team projects, ensuring adherence to deadlines and code quality standards.\n" +
                "Mentored team members, providing code reviews and guidance on mobile development best practices.",
        skills = listOf("Kotlin", "Compose", "XML", "MVVM", "Firebase", "Git", "GitHub")
    );

    // Computed total months between from and to (inclusive of start, exclusive of end month boundary)
    val totalMonths: Int get() = computeTotalMonths(from, to)
    val formattedDuration: String get() = formatMonths(totalMonths)

    companion object {
        private val monthMap = mapOf(
            "JAN" to 1, "FEB" to 2, "MAR" to 3, "APR" to 4, "MAY" to 5, "JUN" to 6,
            "JUL" to 7, "AUG" to 8, "SEP" to 9, "OCT" to 10, "NOV" to 11, "DEC" to 12,
            // Mixed-case abbreviations often used
            "Jan" to 1, "Feb" to 2, "Mar" to 3, "Apr" to 4, "May" to 5, "Jun" to 6,
            "Jul" to 7, "Aug" to 8, "Sep" to 9, "Oct" to 10, "Nov" to 11, "Dec" to 12
        )

        private fun parseMonthYear(raw: String): Pair<Int, Int>? {
            val parts = raw.trim().split(" ")
            if (parts.size != 2) return null
            val monthStr = parts[0]
            val yearStr = parts[1]
            val month = monthMap[monthStr] ?: return null
            val year = yearStr.toIntOrNull() ?: return null
            return month to year
        }

        private fun nowMonthYear(): Pair<Int, Int> {
            val now = Date()
            val month = now.getMonth() + 1 // JS Date months are 0-based
            val year = now.getFullYear().toInt()
            return month to year
        }

        private fun computeTotalMonths(from: String, to: String): Int {
            val (fromMonth, fromYear) = parseMonthYear(from) ?: return 0
            val (toMonth, toYear) = if (to.equals("PRESENT", ignoreCase = true)) nowMonthYear() else parseMonthYear(to) ?: return 0
            val startIndex = fromYear * 12 + (fromMonth - 1)
            val endIndex = toYear * 12 + (toMonth - 1)
            val diff = endIndex - startIndex + 1 // inclusive counting of starting month
            return if (diff < 0) 0 else diff
        }

        private fun formatMonths(total: Int): String {
            if (total <= 0) return "0 months"
            val years = total / 12
            val months = total % 12
            val yearPart = when (years) {
                0 -> null
                1 -> "1 year"
                else -> "$years years"
            }
            val monthPart = when (months) {
                0 -> null
                1 -> "1 month"
                else -> "$months months"
            }
            return listOfNotNull(yearPart, monthPart).joinToString(" and ")
        }
    }
}
