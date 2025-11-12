@file:Suppress("DEPRECATION")
package org.example.newportfolio.components.sections.works.components

import androidx.compose.runtime.Composable
import org.example.newportfolio.components.widgets.button.LinkIconButton
import org.example.newportfolio.models.Work
import org.example.newportfolio.theme.fonts.BodyLargeTextStyle
import org.example.newportfolio.theme.fonts.TextStyle
import org.example.newportfolio.theme.fonts.TitleTextStyle
import org.example.newportfolio.theme.icons.ExternalLinkIcon
import org.example.newportfolio.theme.icons.IconStyle
import org.example.newportfolio.theme.icons.LargeIconSize
import com.varabyte.kobweb.compose.css.*
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.style.ComponentStyle
import com.varabyte.kobweb.silk.components.style.hover
import com.varabyte.kobweb.silk.components.style.toModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.*

val WorkItemStyle by ComponentStyle {
    base {
        Modifier
            .position(Position.Relative)
            .borderRadius(30.px)
            .overflow(Overflow.Hidden)
            .transition(CSSTransition("transform", 0.3.s, TransitionTimingFunction.EaseInOut))
    }
    hover {
        Modifier.transform { scale(1.05) }
    }
    cssRule(":hover .work-item-shadow") {
        Modifier.fillMaxHeight()
    }
    cssRule(":hover .work-item-overlay") {
        Modifier.opacity(1).transform { translateY(0.px) }
    }
    cssRule(":hover .work-item-image") {
        Modifier.transform { scale(1.1) }
    }
}

val WorkItemShadowStyle by ComponentStyle {
    base {
        Modifier
            .position(Position.Absolute)
            .zIndex(1)
            .top(0.px)
            .left(0.px)
            .fillMaxWidth()
            .height(0.px)
            .backgroundColor(Color.rgb(r = 29, g = 28, b = 38))
            .opacity(0.85)
            .transition(CSSTransition("height", 0.4.s, TransitionTimingFunction.EaseInOut))
    }
}

val WorkItemImageStyle by ComponentStyle {
    base {
        Modifier
            .fillMaxSize()
            .transition(CSSTransition("transform", 0.3.s, TransitionTimingFunction.EaseInOut))
    }
}

val WorkItemOverlayStyle by ComponentStyle {
    base {
        Modifier
            .position(Position.Absolute)
            .zIndex(2)
            .textAlign(TextAlign.Center)
            .transition(CSSTransition("all", 0.5.s, TransitionTimingFunction.EaseInOut))
            .opacity(0)
            .fillMaxSize()
            .color(Colors.White)
            .transform { translateY(20.px) }
    }
}

@Composable
fun WorkItem(
    work: Work,
    modifier: Modifier = Modifier,
) {
    Box(
        modifier = WorkItemStyle.toModifier().then(modifier),
        contentAlignment = Alignment.Center
    ) {
        Image(
            src = work.imageRes,
            modifier = WorkItemImageStyle.toModifier().classNames("work-item-image")
        )
        Box(
            modifier = WorkItemShadowStyle.toModifier().classNames("work-item-shadow")
        )
        Column(
            modifier = WorkItemOverlayStyle.toModifier().classNames("work-item-overlay"),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            SpanText(
                text = work.workName,
                modifier = TextStyle.toModifier(TitleTextStyle)
            )
            SpanText(
                text = work.description,
                modifier = TextStyle.toModifier(BodyLargeTextStyle).margin(top = 0.5.cssRem)
            )
            LinkIconButton(
                modifier = Modifier.margin(top = 1.cssRem),
                path = work.link,
                icon = { ExternalLinkIcon(modifier = IconStyle.toModifier(LargeIconSize).color(Colors.White)) }
            )
        }
    }
}