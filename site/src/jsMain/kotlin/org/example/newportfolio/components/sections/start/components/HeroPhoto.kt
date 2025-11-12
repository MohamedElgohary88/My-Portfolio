package org.example.newportfolio.components.sections.start.components

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.example.newportfolio.utils.Res
import org.jetbrains.compose.web.css.*

@Composable
fun HeroPhoto(
    modifier: Modifier = Modifier,
) {

    Box(modifier = modifier.position(Position.Relative)) {

        // Main portrait (should be a transparent PNG for best results)
        Image(
            src = Res.Images.START_IMAGE,
            modifier = Modifier
                .width(100.percent)
                .borderRadius(32.px)
        )
    }
}
