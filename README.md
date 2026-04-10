# Harsha Portfolio UI

A responsive personal portfolio built with React and Vite, designed around a bold dark interface with high-contrast neon accents, project showcases, gallery browsing, and a dedicated project detail experience.

This repository is structured as a production-style frontend project with reusable UI components, page-level composition, centralized content data, and clean routing for a polished portfolio deployment.

## Overview

The application includes:

- A landing page with hero, about, recent projects, and contact CTA sections
- A dedicated about page with skills and profile summary
- A projects page with reusable project cards
- A project detail page for case-study style presentation
- A gallery page with masonry-style visual tiles
- A contact page with a functional client-side interaction flow

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- React Icons
- React Hot Toast
- Tailwind CSS tooling
- ESLint

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Reusable page sections and UI primitives
- Centralized project and skills data for easier maintenance
- Dynamic project detail routing using slug-based URLs
- Clean component separation across `layout`, `sections`, and `ui`
- GitHub-ready project structure for portfolio presentation

## Project Structure

```text
src/
  assets/            Static assets
  components/
    layout/          Shared layout components
    sections/        Page sections
    ui/              Reusable UI building blocks
  data/              Portfolio content and metadata
  hooks/             Custom hooks
  pages/             Route-level pages
  utils/             Utility helpers
  App.jsx            Route configuration
  App.css            Global application styling
  main.jsx           Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates an optimized production build
- `npm run preview` previews the production output locally
- `npm run lint` runs ESLint checks

## Routing

The application currently supports the following routes:

- `/` - Home
- `/about` - About page
- `/projects` - Projects listing
- `/projects/:slug` - Project detail page
- `/gallery` - Gallery page
- `/contact` - Contact page

## Customization

To tailor this portfolio for your own profile:

1. Update project content in `src/data/projects.js`
2. Update skills in `src/data/skills.js`
3. Replace imagery and branding assets inside `src/assets/`
4. Refine colors, spacing, and typography in `src/App.css`
5. Update social/contact links in the section and layout components

## Code Quality Notes

- Content is separated from presentation to keep page components lean
- Shared patterns such as cards, buttons, badges, and section headers are reusable
- Routing is centralized in `src/App.jsx` for easier extension
- Styling is consolidated in a global app stylesheet for consistent visual control

## Deployment

This project can be deployed to any modern static hosting platform, including:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Recommended deployment workflow:

1. Run `npm run build`
2. Deploy the generated `dist/` directory
3. Configure SPA fallback routing if your host requires it

## Status

The frontend currently builds successfully for production and is ready for GitHub publication and further iteration.

## License

This project is intended for personal portfolio use. Add a formal license here if you plan to distribute or open-source it publicly.
