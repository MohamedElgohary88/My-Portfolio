package org.example.newportfolio.theme

import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.graphics.lightened
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.theme.colors.palette.*

@InitSilk
fun initSilkPalette(ctx: InitSilkContext) {
    ctx.apply {
        theme.palettes.apply {
            light.apply {
                val primary = Color.rgb(r = 159, g = 52, b = 240) // #9f34f0
                val accent  = Color.rgb(r = 190, g = 25, b = 228) // #be19e4
                val primaryHover = Color.rgb(r = 145, g = 47, b = 220)
                val primaryPressed = Color.rgb(r = 132, g = 43, b = 201)
                background = Color.rgb(r = 250, g = 248, b = 253) // subtle very light backdrop
                color = Color.rgb(r = 24, g = 22, b = 30) // near-black text
                overlay = Color.rgb(r = 240, g = 232, b = 250) // soft lavender wash
                brand.set(primary = primary, onPrimary = Color.rgb(r = 255, g = 255, b = 255))
                text.set(primary = Color.rgb(r = 24, g = 22, b = 30), secondary = Color.rgb(r = 102, g = 82, b = 140))
                button.set(
                    default = primary,
                    hover = primaryHover,
                    focus = primary,
                    pressed = primaryPressed
                )
                tooltip.set(background = Color.rgb(r = 255, g = 255, b = 255), color = Color.rgb(r = 24, g = 22, b = 30))
            }
            dark.apply {
                val primary = Color.rgb(r = 159, g = 52, b = 240) // #9f34f0
                val accent  = Color.rgb(r = 190, g = 25, b = 228) // #be19e4
                val primaryHover = primary.lightened(byPercent = 0.10f)
                val primaryPressed = primary.lightened(byPercent = 0.20f)
                background = Color.rgb(r = 17, g = 14, b = 22) // deep neutral with purple hint
                color = Color.rgb(r = 235, g = 230, b = 245)
                overlay = Color.rgb(r = 46, g = 33, b = 70) // rich dark purple overlay
                brand.set(primary = primary, onPrimary = Color.rgb(r = 250, g = 247, b = 255))
                text.set(primary = Color.rgb(r = 235, g = 230, b = 245), secondary = Color.rgb(r = 177, g = 160, b = 205))
                button.set(default = primary, hover = primaryHover, focus = primary, pressed = primaryPressed)
                tooltip.set(background = Color.rgb(r = 28, g = 23, b = 35), color = Color.rgb(r = 235, g = 230, b = 245))
            }
        }
    }
}

// Custom Text colors for the Silk theme
val Palette.text: Text get() = (this as MutablePalette).text
val MutablePalette.text: MutableText
    get() = MutableText(this)

interface Text {
    val primary: Color
    val secondary: Color
}

class MutableText(palette: MutablePalette) : MutablePalette.ColorGroup(palette = palette, groupName = "text"), Text {
    override var primary: Color by paletteEntry()
    override var secondary: Color by paletteEntry()

    fun set(
        primary: Color,
        secondary: Color,
    ) {
        this.primary = primary
        this.secondary = secondary
    }
}

// Custom Brand colors
val Palette.brand: Brand get() = (this as MutablePalette).brand
val MutablePalette.brand: MutableBrand
    get() = MutableBrand(this)

interface Brand {
    val primary: Color
    val onPrimary: Color
}

class MutableBrand(palette: MutablePalette) : MutablePalette.ColorGroup(palette = palette, groupName = "brand"), Brand {
    override var primary: Color by paletteEntry()
    override var onPrimary: Color by paletteEntry()

    fun set(
        primary: Color,
        onPrimary: Color,
    ) {
        this.primary = primary
        this.onPrimary = onPrimary
    }
}