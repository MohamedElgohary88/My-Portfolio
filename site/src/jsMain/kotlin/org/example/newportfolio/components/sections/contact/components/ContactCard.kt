@file:Suppress("DEPRECATION")

package org.example.newportfolio.components.sections.contact.components

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.varabyte.kobweb.compose.css.CSSTransition
import org.example.newportfolio.components.widgets.button.LinkIconButton
import org.example.newportfolio.models.Social
import org.example.newportfolio.theme.icons.IconStyle
import org.example.newportfolio.theme.icons.MediumIconSize
import org.example.newportfolio.utils.Res
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.thenIf
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.overlay
import com.varabyte.kobweb.silk.theme.colors.palette.toPalette
import org.example.newportfolio.theme.brand
import org.example.newportfolio.theme.fonts.*
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.deg
import org.jetbrains.compose.web.css.em
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.P
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.css.s // correct time unit import
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint

val ContactCardStyle by ComponentStyle(
    extraModifiers = {
        TextStyle.toModifier(BodyLargeTextStyle)
    }
) {
    val colors = colorMode.toPalette()
    base {
        Modifier
            .fillMaxWidth()
            .background(colors.overlay)
            .borderRadius(30.px)
            .padding(topBottom = 1.cssRem, leftRight = 1.cssRem)
            .boxShadow(blurRadius = 20.px, spreadRadius = 2.px, color = colors.overlay)
            .transition(Transition.of("box-shadow", 0.4.s, TransitionTimingFunction.EaseInOut))
    }
    cssRule("&:hover") {
        Modifier
            .transform { translateY((-6).px); rotate((-0.4).deg) }
            .boxShadow(blurRadius = 28.px, spreadRadius = 6.px, color = colors.brand.primary.toRgb().copyf(alpha = 0.45f))
            .transition(
                Transition.of("transform", 0.32.s, TransitionTimingFunction.EaseInOut),
                Transition.of("box-shadow", 0.32.s, TransitionTimingFunction.EaseInOut)
            )
    }
    Breakpoint.LG {
        Modifier
            .fillMaxWidth(65.percent)
            .padding(topBottom = 2.cssRem, leftRight = 2.cssRem)
    }
    Breakpoint.XL {
        Modifier
            .fillMaxWidth(60.percent)
            .maxWidth(64.cssRem)
            .padding(topBottom = 2.25.cssRem, leftRight = 2.25.cssRem)
    }
}

@Composable
fun ContactCard(
    colorMode: ColorMode = ColorMode.current
) {
    var isHovered by remember { mutableStateOf(false) }
    val palette = ColorMode.current.toPalette()
    val bp = rememberBreakpoint()
    val horizontalTextMargin = if (bp < Breakpoint.MD) 1.2.em else 0.6.em
    Column(
        modifier = ContactCardStyle.toModifier()
            .onMouseEnter { isHovered = true }
            .onMouseLeave { isHovered = false }
            .thenIf(
                isHovered,
                Modifier
                    .transform { translateY((-6).px); scale(1.015); rotate((-0.5).deg) }
                    .boxShadow(color = palette.brand.primary.toRgb().copyf(alpha = 0.45f), blurRadius = 26.px, spreadRadius = 6.px)
            )
            .transition(
                CSSTransition("transform", 0.28.s, TransitionTimingFunction.EaseInOut),
                CSSTransition("box-shadow", 0.30.s, TransitionTimingFunction.EaseInOut)
            ),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Top
    ) {
        SpanText(
            modifier = TextStyle.toModifier(DisplayTextStyle, TextStylePrimaryColor)
                .textAlign(TextAlign.Center)
                .margin(leftRight = horizontalTextMargin),
            text = Res.Strings.CONTACT_SECTION_TITLE
        )
        P(
            attrs = TextStyle.toModifier(BodyLargeTextStyle, TextStyleSecondaryColor)
                .textAlign(TextAlign.Center)
                .margin(top = 0.6.em, leftRight = horizontalTextMargin)
                .lineHeight(1.6.em)
                .toAttrs(),
        ) {
            Text("Feel free to reach out about collaborations, performance audits, or just to say hi. Email ")
            SpanText(
                text = Res.Strings.EMAIL_ADDRESS,
                modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor)
                    .fontFamily(Res.FontFamilies.POPPINS_MEDIUM)
                    .textAlign(TextAlign.Center),
            )
            Text(" or Telegram ")
            SpanText(
                text = Res.Strings.TELEGRAM_USERNAME,
                modifier = TextStyle.toModifier(BodyLargeTextStyle, TextStylePrimaryColor)
                    .fontFamily(Res.FontFamilies.POPPINS_MEDIUM)
                    .textAlign(TextAlign.Center),
            )
            Text(" — let’s build something impactful.")
        }
        Row(
            modifier = Modifier
                .margin(top = 2.5.em)
                .gap(1.1.em),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Social.entries.forEach { social ->
                LinkIconButton(
                    path = social.link,
                    iconRes = if (colorMode.isLight) social.iconResLight else social.iconResDark,
                    iconModifier = IconStyle.toModifier(MediumIconSize)
                        .transition(Transition.of("transform", 0.3.s, TransitionTimingFunction.EaseInOut))
                )
            }
        }
    }
}