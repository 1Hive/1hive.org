import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "1Hive",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "1hive.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: { name: "Public Sans", weights: [700, 800], includeItalic: false },
        header: { name: "Public Sans", weights: [500, 700, 800], includeItalic: false },
        body: { name: "Source Sans 3", weights: [400, 600, 700], includeItalic: true },
        code: { name: "Roboto Mono", weights: [400, 600], includeItalic: false },
      },
      colors: {
        lightMode: {
          light: "#fbf8ee",
          lightgray: "#ece3ce",
          gray: "#b7aa90",
          darkgray: "#554d3f",
          dark: "#302a23",
          secondary: "#d99a00",
          tertiary: "#2eaaa4",
          highlight: "rgba(255, 221, 15, 0.28)",
          textHighlight: "rgba(255, 221, 15, 0.38)",
        },
        darkMode: {
          light: "#2a241d",
          lightgray: "#393126",
          gray: "#756b59",
          darkgray: "#e9dfc8",
          dark: "#fbf8ee",
          secondary: "#ffdd0f",
          tertiary: "#7ce0d6",
          highlight: "rgba(255, 221, 15, 0.2)",
          textHighlight: "rgba(255, 221, 15, 0.24)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.LandingPage(),
      Plugin.AgentResources(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
