import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.browser.api
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.RoutePrefix
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.silk.defer.renderWithDeferred
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.dom.hasClass
import kotlinx.dom.removeClass
import org.jetbrains.compose.web.renderComposable
import org.w3c.dom.EventSource
import org.w3c.dom.EventSourceInit
import org.w3c.dom.MessageEvent
import org.w3c.dom.`get`

private fun forceReloadNow() {
    window.stop()
    window.location.reload()
}

private fun handleServerStatusEvents() {
    val status = document.getElementById("status")!!
    var lastVersion: Int? = null
    var shouldReload = false

    val warningIcon = status.children[0]!!
    val spinnerIcon = status.children[1]!!
    val statusText = status.children[2]!!

    status.addEventListener("transitionend", {
        if (status.hasClass("fade-out")) {
            status.removeClass("fade-out")
            if (shouldReload) {
                forceReloadNow()
            }
        }
    })

    val eventSource = EventSource("/api/kobweb-status", EventSourceInit(true))
    eventSource.addEventListener("version", { evt ->
        val version = (evt as MessageEvent).data.toString().toInt()
        if (lastVersion == null) {
            lastVersion = version
        }
        if (lastVersion != version) {
            lastVersion = version
            if (status.className.isNotEmpty()) {
                shouldReload = true
            } else {
                // Not sure if we can get here but if we can't rely on the status transition
                // to reload we should do it ourselves.
                forceReloadNow()
            }
        }
    })

    eventSource.addEventListener("status", { evt ->
        val values: dynamic = JSON.parse<Any>((evt as MessageEvent).data.toString())
        val text = values.text as String
        val isError = (values.isError as String).toBoolean()
        if (text.isNotBlank()) {
            warningIcon.className = if (isError) "visible" else "hidden"
            spinnerIcon.className = if (isError) "hidden" else "visible"
            statusText.innerHTML = "<i>$text</i>"
            status.className = "fade-in"
        } else {
            if (status.className == "fade-in") {
                status.className = "fade-out"
            }
        }
    })

    eventSource.onerror = { eventSource.close() }
}

public fun main() {
    handleServerStatusEvents()

    window.api.logOnError = true

    RoutePrefix.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { org.example.newportfolio.pages.HomePage() }

    }
    router.setLegacyRouteRedirectStrategy(Router.LegacyRouteRedirectStrategy.WARN)
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerVariant("-about-section-skills-grid",
                org.example.newportfolio.components.sections.about.components.AboutSectionSkillsGridVariant
        )
        ctx.theme.registerVariant("-side-menu",
                org.example.newportfolio.components.sections.nav_header.components.SideMenuLinkVariant
        )
        ctx.theme.registerVariant("-active-side-menu",
                org.example.newportfolio.components.sections.nav_header.components.ActiveSideMenuLinkVariant
        )
        ctx.theme.registerVariant("-work-items",
                org.example.newportfolio.components.sections.works.components.WorkItemsSimpleGridVariant
        )
        ctx.theme.registerVariant("-icon",
                org.example.newportfolio.components.widgets.button.IconButtonVariant
        )
        ctx.theme.registerVariant("-primary-icon",
                org.example.newportfolio.components.widgets.button.PrimaryIconButtonVariant
        )
        ctx.theme.registerVariant("-icon-button",
                org.example.newportfolio.components.widgets.button.LinkIconButtonVariant
        )
        ctx.theme.registerVariant("-primary",
                org.example.newportfolio.components.widgets.button.PrimaryButtonVariant
        )
        ctx.theme.registerVariant("-primary-button-with-icon-padding",
                org.example.newportfolio.components.widgets.button.PrimaryButtonWithIconPadding
        )
        ctx.theme.registerVariant("-skill-item",
                org.example.newportfolio.components.widgets.skill.SkillItemImageVariant
        )
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.contact.components.ContactCardStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.footer.FooterStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.nav_header.NavHeaderStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.nav_header.components.AppLogoStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.nav_header.components.SideMenuStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.start.components.SkillSectionDividerStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.start.components.StartSectionGridStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.start.components.StartSectionImageStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.works.components.WorkItemStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.works.components.WorkItemShadowStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.works.components.WorkItemImageContainerStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.sections.works.components.WorkItemOverlayStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.widgets.section.SectionContainerStyle)
        ctx.theme.registerStyle(org.example.newportfolio.components.widgets.skill.SkillItemStyle)
        ctx.theme.registerStyle(org.example.newportfolio.theme.fonts.TextStyle)
        ctx.theme.registerStyle(org.example.newportfolio.theme.icons.IconStyle)
        ctx.theme.registerVariants(org.example.newportfolio.components.sections.about.AboutSectionVariant)
        ctx.theme.registerVariants(org.example.newportfolio.components.sections.contact.ContactSectionVariant)
        ctx.theme.registerVariants(org.example.newportfolio.components.sections.education.EducationCardStyle)
        ctx.theme.registerVariants(org.example.newportfolio.components.sections.start.StartSectionVariant)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.TextStylePrimaryColor)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.TextStyleSecondaryColor)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.TextStyleBrandColor)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.DisplayTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.SubDisplayTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.TitleTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.LabelLargeTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.LabelMediumTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.BodyLargeTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.BodyMediumTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.BodySmallTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.TitleTextStyleSmaller)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.ExperienceTitleTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.ExperienceDateTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.fonts.ExperienceChipTextStyle)
        ctx.theme.registerVariants(org.example.newportfolio.theme.icons.IconBrandColorVariant)
        ctx.theme.registerVariants(org.example.newportfolio.theme.icons.IconOnBrandColorVariant)
        ctx.theme.registerVariants(org.example.newportfolio.theme.icons.LargeIconSize)
        ctx.theme.registerVariants(org.example.newportfolio.theme.icons.MediumIconSize)
        ctx.theme.registerVariants(org.example.newportfolio.theme.icons.SmallIconSize)
        ctx.theme.registerKeyframes(org.example.newportfolio.components.sections.nav_header.components.SideMenuSlideInAnim)
        ctx.theme.registerKeyframes(org.example.newportfolio.components.sections.start.components.StartSectionGridKeyFrames)
        org.example.newportfolio.initColorMode(ctx)
        org.example.newportfolio.theme.initAppStyles(ctx)
        org.example.newportfolio.theme.initSilkPalette(ctx)
    }

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    router.navigateTo(window.location.href.removePrefix(window.location.origin),
            UpdateHistoryMode.REPLACE)

    val root = document.getElementById("root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    AppGlobals.initialize(mapOf("title" to "New Portfolio"))
    renderComposable(rootElementId = "root") {
        org.example.newportfolio.AppEntry {
            router.renderActivePage { renderWithDeferred { it() } }
        }
    }
}
