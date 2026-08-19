# Architecture & Documentation

## Overview
Shade Tree Health & Wellness is a modern Single Page Application (SPA) built with React 19, Vite, and Tailwind CSS. It is designed to be fully static, fast, and easily deployable via platforms like Netlify.

## Tech Stack
- **Framework**: React (v19)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v4)
- **Animations**: `motion` (Framer Motion)
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom`
- **CMS**: Decap CMS

## Directory Structure
- `/src/components`: UI primitives and layout blocks (Header, Footer, Hero, Process, etc.)
- `/src/pages`: Top-level page views combining components.
- `/src/content`: Contains `data.json`, the single source of truth for site content.
- `/public/admin`: Decap CMS configuration (`config.yml` and `index.html`).
- `/public/uploads`: Media files uploaded via Decap CMS.

## Content Strategy
All core site text, lists, and image references are stored in `/src/content/data.json`. This JSON file is dynamically managed by Decap CMS. When a user updates content through `/admin`, Decap commits the changes back to the repository, triggering a new deployment.

The CMS schema is defined in `/public/admin/config.yml`. It uses the `object` and `list` widgets to build a nested structure representing the various sections of the site (Hero, Process, About, Value, Services, etc.).

## Deployment & Hosting
- Designed for Git-based deployment workflows (e.g., Netlify).
- Requires `_redirects` containing `/* /index.html 200` to allow client-side routing.
- Decap CMS operates in `git-gateway` mode, meaning the hosting provider handles authentication and forwards commits to the repository.

## Design System
- **Colors**: Uses a custom color palette defined in Tailwind (`earth-green`, `slate-blue-900`, `slate-blue-800`).
- **Typography**: Uses `Libertinus Serif` for headings to convey trust and tradition, paired with `Varela` for legible, modern body copy.
- **Scrollbar**: Custom thin, semi-transparent scrollbar matching the dark aesthetic.
