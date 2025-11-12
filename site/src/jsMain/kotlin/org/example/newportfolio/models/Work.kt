package org.example.newportfolio.models

import org.example.newportfolio.utils.Res

enum class Work(
    val workName: String,
    val description: String,
    val link: String,
    val imageRes: String,
) {
    Bismar(
        workName = "Bismar - Construction Materials",
        description = "KMP app for customers & sellers with Clean Architecture.",
        link = "https://www.figma.com/design/xH89PIcnmNljlN5x01KA8s/Bismar-production?node-id=0-1&p=f&t=EpdgwJUagMfJt5pG-0",
        imageRes = Res.Images.BISMAR
    ),
    HotelX(
        workName = "Hotel Management System",
        description = "Large-scale tablet app with inventory control and automated reporting.",
        link = "https://youtu.be/SLVSWdPvxeQ",
        imageRes = Res.Images.HOTEL
    ),
    HoneyMart(
        workName = "Honey Mart App Suite",
        description = "Multi-module Android apps for users, owners, and admins using Jetpack Compose.",
        link = "https://github.com/MohamedElgohary88/Honey-Mart",
        imageRes = Res.Images.HONEY_MART
    ),
    Blog(
        workName = "Full-Stack Blog (KMP)",
        description = "Unified Android, iOS, and Web development, reducing creation time by 30%.",
        link = "https://github.com/MohamedElgohary88/BlogMultiplatform",
        imageRes = Res.Images.BLOG
    ),
    Teamix(
        workName = "Teamix Project Manager",
        description = "Boosted task completion by 30% for over 500 active users.",
        link = "https://github.com/MohamedElgohary88/Teamix",
        imageRes = Res.Images.TEAMIX
    ),
    SkyCast(
        workName = "SkyCast Weather App",
        description = "Cross-platform KMP app using Ktor for APIs and Koin for DI.",
        link = "https://github.com/MohamedElgohary88/SkyCast",
        imageRes = Res.Images.SKY_CAST
    ),
    Movie(
        workName = "Movies App",
        description = "Android & Design",
        link = "https://github.com/MohamedElgohary88/MovieApp",
        imageRes = Res.Images.MOVIE
    ),
}