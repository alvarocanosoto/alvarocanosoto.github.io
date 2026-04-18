import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Álvaro Caño Soto",
  DESCRIPTION: "Computer Engineer and AI Master's graduate, Research Engineer at the Barcelona Supercomputing Center. I design data platforms and AI systems for industrial and defense applications.",
  AUTHOR: "Álvaro Caño Soto",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have built.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Selected projects in data engineering, AI, and defense-grade systems.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all projects by keyword.",
}

// Links — Blog and Projects intentionally excluded for now
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "alvarocanosoto@gmail.com",
    HREF: "mailto:alvarocanosoto@gmail.com",
  },
  {
    NAME: "GitHub",
    ICON: "github",
    TEXT: "alvarocanosoto",
    HREF: "https://github.com/alvarocanosoto",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "alvarocanosoto",
    HREF: "https://www.linkedin.com/in/alvarocanosoto",
  },
]
