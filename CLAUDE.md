# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server:** `npm run dev` (uses Next.js with Turbopack)
- **Build:** `npm run build`
- **Production server:** `npm start`
- **Lint:** `npm run lint`

## Project Architecture

This is a Next.js 15 application using the App Router pattern with TypeScript and Tailwind CSS. The project follows a modern React architecture with performance optimizations.

### Key Directory Structure

- `src/app/` - App Router pages and layouts (Next.js 13+ pattern)
- `src/components/` - React components including Shadcn UI components
- `src/components/ui/` - Reusable UI components (button, switch, Footer, SiteHeader)
- `src/data/` - Data definitions and exports (projects.ts contains project interface and data)
- `src/lib/` - Utility functions and configuration (utils.ts, seo.config.ts)
- `src/styles/` - Global CSS styles

### Architecture Patterns

- **Client/Server Components:** Uses RSC pattern with separate client components (e.g., `HomeClient.tsx`)
- **Performance Optimization:** Implements critical CSS injection, deferred styles loading, and image preloading
- **Theme System:** Uses next-themes with system/light/dark mode support
- **SEO:** Comprehensive metadata generation with structured data and Open Graph support
- **UI Framework:** Built on Shadcn UI (new-york style) with Radix UI primitives and Tailwind CSS

### Key Configuration

- **Shadcn UI:** Configured in `components.json` using new-york style with path aliases
- **Brand Color:** Orange (#f97316) used consistently across theme and metadata
- **Font:** Inter font with variable CSS properties
- **Icons:** Lucide React for consistent iconography

### Performance Features

- Critical CSS inlining via `CriticalCSS` component
- Deferred non-critical styles loading
- Image preloading for key assets
- Script optimization with beforeInteractive and lazyOnload strategies
- Below-fold content visibility optimization

### Data Management

Projects are defined in `src/data/projects.ts` with a typed interface including status tracking (completed/coming-soon), technology stack, and image optimization fields.