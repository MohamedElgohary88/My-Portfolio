package org.example.newportfolio.models

import org.example.newportfolio.utils.Res

enum class Skill(
    val skillName: String,
    val level: String,
    val iconResLight: String,
    val iconResDark: String,
) {
    AndroidStudio(
        skillName = "Android Studio",
        level = "Skilled",
        iconResLight = Res.Images.ANDROID_STUDIO,
        iconResDark = Res.Images.ANDROID_STUDIO,
    ),
    IntellijIdea(
        skillName = "IntelliJ IDEA",
        level = "Skilled",
        iconResLight = Res.Images.INTELLIJ_IDEA,
        iconResDark = Res.Images.INTELLIJ_IDEA,
    ),
    Kotlin(
        skillName = "Kotlin",
        level = "Skilled",
        iconResLight = Res.Images.KOTLIN,
        iconResDark = Res.Images.KOTLIN
    ),
    JetpackCompose(
        skillName = "Compose",
        level = "Skilled",
        iconResLight = Res.Images.JETPACK_COMPOSE,
        iconResDark = Res.Images.JETPACK_COMPOSE
    ),
    GitHub(
        skillName = "GitHub",
        level = "Skilled",
        iconResLight = Res.Images.GITHUB_LIGHT,
        iconResDark = Res.Images.GITHUB_DARK
    ),
    Java(
        skillName = "Java",
        level = "Novice",
        iconResLight = Res.Images.JAVA,
        iconResDark = Res.Images.JAVA
    ),
    Ktor(
        skillName = "Ktor",
        level = "Skilled",
        iconResLight = Res.Images.KTOR,
        iconResDark = Res.Images.KTOR,
    ),
    Figma(
        skillName = "Figma",
        level = "Skilled",
        iconResLight = Res.Images.FIGMA,
        iconResDark = Res.Images.FIGMA
    ),
    Postgresql(
        skillName = "PostgreSQL",
        level = "Novice",
        iconResLight = Res.Images.POSTGRESQL,
        iconResDark = Res.Images.POSTGRESQL
    ),
    Firebase(
        skillName = "Firebase",
        level = "Skilled",
        iconResLight = Res.Images.FIREBASE,
        iconResDark = Res.Images.FIREBASE
    ),
    // New skills (placeholder icons can reuse existing until SVGs added)
    Flutter(
        skillName = "Flutter",
        level = "Skilled",
        iconResLight = Res.Images.FLUTTER,
        iconResDark = Res.Images.FLUTTER
    ),
    Dart(
        skillName = "Dart",
        level = "Skilled",
        iconResLight = Res.Images.DART,
        iconResDark = Res.Images.DART
    ),
    KMP(
        skillName = "KMP",
        level = "Skilled",
        iconResLight = Res.Images.KOTLIN,
        iconResDark = Res.Images.KOTLIN
    ),
    CleanArchitecture(
        skillName = "Clean Arch",
        level = "Skilled",
        iconResLight = Res.Images.INTELLIJ_IDEA,
        iconResDark = Res.Images.INTELLIJ_IDEA
    ),
    MVVM(
        skillName = "MVVM",
        level = "Skilled",
        iconResLight = Res.Images.INTELLIJ_IDEA,
        iconResDark = Res.Images.INTELLIJ_IDEA
    ),
    Gradle(
        skillName = "Gradle",
        level = "Skilled",
        iconResLight = Res.Images.GRADLE,
        iconResDark = Res.Images.GRADLE
    ),
    GitLab(
        skillName = "GitLab",
        level = "Skilled",
        iconResLight = Res.Images.GITLAB,
        iconResDark = Res.Images.GITLAB
    ),
    Postman(
        skillName = "Postman",
        level = "Skilled",
        iconResLight = Res.Images.POSTMAN,
        iconResDark = Res.Images.POSTMAN
    ),
    SQLite(
        skillName = "SQLite",
        level = "Skilled",
        iconResLight = Res.Images.SQLITE,
        iconResDark = Res.Images.SQLITE
    ),
    MongoDB(
        skillName = "MongoDB",
        level = "Skilled",
        iconResLight = Res.Images.MONGODB,
        iconResDark = Res.Images.MONGODB
    ),
    Realm(
        skillName = "Realm",
        level = "Skilled",
        iconResLight = Res.Images.REALM,
        iconResDark = Res.Images.REALM
    ),
    GraphQL(
        skillName = "GraphQL",
        level = "Novice",
        iconResLight = Res.Images.GRAPHQL,
        iconResDark = Res.Images.GRAPHQL
    ),
    Slack(
        skillName = "Slack",
        level = "Skilled",
        iconResLight = Res.Images.SLACK,
        iconResDark = Res.Images.SLACK
    ),
    Swift(
        skillName = "Swift",
        level = "Novice",
        iconResLight = Res.Images.SWIFT,
        iconResDark = Res.Images.SWIFT
    ),
    Apple(
        skillName = "Apple",
        level = "Novice",
        iconResLight = Res.Images.APPLE,
        iconResDark = Res.Images.APPLE
    ),
    AdobeXD(
        skillName = "Adobe XD",
        level = "Novice",
        iconResLight = Res.Images.ADOBE_XD,
        iconResDark = Res.Images.ADOBE_XD
    ),
}