subprojects {
    repositories {
        mavenCentral()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
        google()
        maven("https://us-central1-maven.pkg.dev/varabyte-repos/public")
    }
}

// Provide a convenient root-level alias so `./gradlew run` works
// This starts the Kobweb dev server defined in the `:site` module.
tasks.register("run") {
    group = "application"
    description = "Starts the Kobweb dev server for the site module (alias for :site:kobwebStart)."
    dependsOn(":site:kobwebStart")
}
