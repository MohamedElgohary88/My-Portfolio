package org.example.newportfolio.models

import org.example.newportfolio.utils.Res

enum class Work(
    val workName: String,
    val description: String,
    val link: String,
    val imageRes: String,
) {
    HoneyMart(
        workName = "Honey Mart",
        description = "Android & Backend & Design",
        link = "https://github.com/MohamedElgohary88/Honey-Mart",
        imageRes = Res.Images.HONEY_MART
    ),
    Teamix(
        workName = "Teamix App",
        description = "Android & Backend & Design",
        link = "https://github.com/MohamedElgohary88/Teamix",
        imageRes = Res.Images.TEAMIX
    ),
    SkyCast(
        workName = "SkyCast Weather App",
        description = "Desktop & Api & Design",
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