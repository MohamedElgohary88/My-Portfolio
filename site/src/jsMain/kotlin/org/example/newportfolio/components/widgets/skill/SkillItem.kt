@file:Suppress("DEPRECATION")
package org.example.newportfolio.components.widgets.skill

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.modifiers.boxShadow
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.maxWidth
import com.varabyte.kobweb.compose.ui.modifiers.onMouseEnter
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.transform
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.graphics.ImageStyle
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.addVariant
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import org.example.newportfolio.theme.fonts.*
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.em
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.example.newportfolio.models.Skill
import org.example.newportfolio.theme.brand
import org.jetbrains.compose.web.css.deg
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.s

val SkillItemStyle by ComponentStyle(extraModifiers = { TextStyle.toModifier(LabelLargeTextStyle) }) {
    base {
        Modifier.maxWidth(12.5.em)
    }
}

val SkillItemImageVariant by ImageStyle.addVariant {
    Breakpoint.ZERO {
        Modifier.size(1.65.cssRem)
    }
    Breakpoint.SM {
        Modifier.size(1.75.cssRem)
    }
    Breakpoint.MD {
        Modifier.size(2.cssRem)
    }
    Breakpoint.LG {
        Modifier.size(2.25.cssRem)
    }
    Breakpoint.XL {
        Modifier.size(2.25.cssRem)
    }
}

@Composable
fun SkillItem(
    skill: Skill,
    colorMode: ColorMode = ColorMode.current,
    modifier: Modifier = Modifier,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
) {
    var hovered by remember { mutableStateOf(false) }
    val palette = colorMode.toPalette()
    Row(
        modifier = SkillItemStyle.toModifier().then(modifier)
            .onMouseEnter { hovered = true }
            .onMouseLeave { hovered = false }
            .thenIf(hovered,
                Modifier
                    .transform { translateY((-3).px); scale(1.06); rotate((-2).deg) }
                    .boxShadow(color = palette.brand.primary.toRgb().copyf(alpha = 0.5f), blurRadius = 16.px, spreadRadius = 3.px)
            )
            .transition(
                Transition.of("transform", 0.28.s, TransitionTimingFunction.EaseInOut),
                Transition.of("box-shadow", 0.32.s, TransitionTimingFunction.EaseInOut)
            ),
        horizontalArrangement = horizontalArrangement,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Image(
            src = if (colorMode.isLight) skill.iconResLight else skill.iconResDark,
            variant = SkillItemImageVariant,
        )
        Column(
            modifier = Modifier.margin(left = 0.75.cssRem),
            horizontalAlignment = Alignment.Start,
            verticalArrangement = Arrangement.SpaceBetween
        ) {
            SpanText(
                text = skill.skillName,
                modifier = TextStyle.toModifier(LabelLargeTextStyle, TextStylePrimaryColor)
            )
            SpanText(
                text = skill.level,
                modifier = TextStyle.toModifier(BodySmallTextStyle, TextStyleSecondaryColor)
            )
        }
    }
}