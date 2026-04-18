# Portfolio — Álvaro Caño Soto

Personal portfolio website built with [Astro Sphere](https://github.com/markhorn-dev/astro-sphere), deployed on GitHub Pages.

## Tech stack

- [Astro 4](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [SolidJS](https://www.solidjs.com) — interactive UI components
- GitHub Pages — hosting

---

## Local development

### Option A — Docker (recommended, no Node.js needed)

Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```bash
# Primera vez, o tras modificar package.json
docker compose up --build

# Arrancar el servidor (imagen ya construida)
docker compose up

# Parar
docker compose down
```

Abre `http://localhost:4321`. Los cambios en el editor se reflejan automáticamente (hot reload).

> **Nota Windows:** El `CHOKIDAR_USEPOLLING=true` en `compose.yml` garantiza que el hot reload funcione correctamente con Docker Desktop en Windows.

---

### Option B — Node.js directo

#### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm (bundled with Node.js)

#### Setup

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Build for production (output to dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## Project structure

```
src/
  components/     # Reusable Astro and TSX components
  content/
    projects/     # Project markdown files
    work/         # Work history markdown files
    blog/         # Blog posts (currently empty)
    legal/        # Legal pages
  i18n/
    ui.ts         # English/Spanish translation strings and helpers
  layouts/        # Page layout wrappers
  pages/
    index.astro   # English home (/)
    work/         # English work page (/work)
    projects/     # English projects page (/projects)
    es/           # All Spanish routes (/es/*)
  consts.ts       # Site metadata, navigation links, social links
public/           # Static assets (fonts, SVGs, JS scripts)
.github/
  workflows/
    deploy.yml    # GitHub Actions CI/CD for GitHub Pages
```

---

## Content management

### Adding a project

Create a new folder under `src/content/projects/` with an `index.md` file:

```markdown
---
title: "Project Title"
summary: "English summary."
summaryEs: "Spanish summary (optional)."
date: "Jan 1 2025"
draft: false
tags:
  - Tag One
  - Tag Two
demoUrl: https://example.com    # optional
repoUrl: https://github.com/... # optional
---

Full project description in Markdown here.
```

### Adding a work entry

Create a `.md` file under `src/content/work/`:

```markdown
---
company: "Company Name"
role: "Role Title"
dateStart: "01/01/2023"
dateEnd: "Present"   # or a date like "12/31/2024"
---

Description of responsibilities and achievements.
```

---

## Internationalization (i18n)

The site ships with full English/Spanish bilingual support:

| Route | Language |
|-------|----------|
| `/` | English |
| `/work` | English |
| `/projects` | English |
| `/es/` | Spanish |
| `/es/work` | Spanish |
| `/es/projects` | Spanish |

A language toggle button (`EN` / `ES`) is visible in the navigation bar on all pages.

Translation strings live in [src/i18n/ui.ts](src/i18n/ui.ts). To add or edit translations, update the `ui.en` and `ui.es` objects in that file.

---

## Deployment to GitHub Pages

### First-time setup

1. Create a GitHub repository for this project.
2. Push this code to the `main` branch.
3. In the repository **Settings → Pages**, set the source to **GitHub Actions**.

### URL configuration

Edit `astro.config.mjs` to match your repository:

```js
// For a user/org site (repo named <username>.github.io):
site: "https://alvarocanosoto.github.io",

// For a project site (any other repo name), also add base:
site: "https://alvarocanosoto.github.io/your-repo-name",
base: "/your-repo-name",
```

### Triggering a deploy

Any push to `main` automatically triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

You can also trigger a deploy manually from the **Actions** tab in your repository.

---

## Replacing the profile photo

A placeholder is used for now. To replace it, place your photo in `public/` and update the `<img>` reference in `src/pages/index.astro`.

---

## License

Based on [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) by Mark Horn, MIT License.
