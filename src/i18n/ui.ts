export const languages = {
  en: "English",
  es: "Español",
}

export const defaultLang = "en"

export const ui = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.projects": "Projects",

    // Hero
    "hero.greeting": "Hello, I am",
    "hero.tagline":
      "I design and build data platforms and AI systems for critical and defense-grade applications — from sensor ingestion to operational intelligence.",
    "hero.cta.work": "View my work",
    "hero.cta.projects": "See my projects",

    // About
    "about.bio":
      "Computer Engineer and AI Master's graduate, currently Research Engineer at the Barcelona Supercomputing Center. I design digital twins, data pipelines, and AI systems for industrial and defense applications — with experience delivering on international and defense-grade projects.",

    // Skills
    "skills.title": "Technical Stack",
    "skills.data_engineering": "Data Engineering",
    "skills.storage": "Storage",
    "skills.ai_ml": "AI & ML",
    "skills.infrastructure": "Infrastructure",
    "skills.exposure": "Exposure & Visualization",

    // Projects
    "projects.recent": "Recent projects",
    "projects.all": "All projects",
    "projects.page.title": "Projects",
    "projects.page.description":
      "Selected projects in data engineering, AI, and defense-grade systems.",

    // Work
    "work.page.title": "Work",
    "work.page.description": "Where I have worked and what I have built.",

    // Contact
    "contact.title": "Let's Connect",
    "contact.subtitle": "Reach out via email or on social media.",

    // Footer
    "footer.back_to_top": "Back to top",
    "footer.all_rights": "All rights reserved",
    "footer.status": "All systems normal",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.work": "Experiencia",
    "nav.projects": "Proyectos",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.tagline":
      "Diseño y construyo plataformas de datos y sistemas de IA para aplicaciones críticas y de defensa — desde la ingesta de sensores hasta la inteligencia operacional.",
    "hero.cta.work": "Ver mi experiencia",
    "hero.cta.projects": "Ver mis proyectos",

    // About
    "about.bio":
      "Ingeniero Informático y Máster en Inteligencia Artificial, actualmente Research Engineer en el Barcelona Supercomputing Center. Diseño digital twins, pipelines de datos y sistemas de IA para aplicaciones industriales y de defensa, con experiencia en proyectos internacionales y de grado defensa.",

    // Skills
    "skills.title": "Stack Técnico",
    "skills.data_engineering": "Ingeniería de Datos",
    "skills.storage": "Almacenamiento",
    "skills.ai_ml": "IA y ML",
    "skills.infrastructure": "Infraestructura",
    "skills.exposure": "Exposición y Visualización",

    // Projects
    "projects.recent": "Proyectos recientes",
    "projects.all": "Todos los proyectos",
    "projects.page.title": "Proyectos",
    "projects.page.description":
      "Proyectos seleccionados en ingeniería de datos, IA y sistemas de grado defensa.",

    // Work
    "work.page.title": "Experiencia",
    "work.page.description": "Dónde he trabajado y qué he construido.",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Escríbeme por email o en redes sociales.",

    // Footer
    "footer.back_to_top": "Volver arriba",
    "footer.all_rights": "Todos los derechos reservados",
    "footer.status": "Todos los sistemas operativos",
  },
} as const

export type UiKey = keyof typeof ui.en

export function getLangFromUrl(url: URL): "en" | "es" {
  const segments = url.pathname.split("/").filter(Boolean)
  if (segments[0] === "es") return "es"
  return "en"
}

export function useTranslations(lang: "en" | "es") {
  return function t(key: UiKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.en as Record<string, string>)[key]
  }
}

export function getLocalizedPath(pathname: string, targetLang: "en" | "es"): string {
  const isCurrentlyEs = pathname.startsWith("/es")

  if (targetLang === "es") {
    if (isCurrentlyEs) return pathname
    return "/es" + (pathname === "/" ? "/" : pathname)
  } else {
    if (!isCurrentlyEs) return pathname
    return pathname.replace(/^\/es/, "") || "/"
  }
}
