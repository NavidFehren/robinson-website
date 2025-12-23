# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (http://localhost:3000)
npm run build  # Build for production
npm run preview # Preview production build
```

## Architecture

Single-page React app for Robinson Boat Tours (Mali Lošinj, Croatia).

### Key Structure

- **App.tsx** - Main app shell, manages language state and section scrolling
- **content.ts** - All text content for 3 languages (DE, EN, HR) as a typed object
- **types.ts** - TypeScript interfaces for Content, Language, Tour, etc.
- **pages/** - Section components (Home, Tours, About, Gallery, Contact) rendered as one scrollable page
- **components/** - Shared components (Header, Footer)

### Styling

- Tailwind CSS via CDN with custom config in `index.html`
- Custom colors: `sea-*` (blues) and `sand-*` (beige tones)
- Custom CSS animations (waves) defined in `index.html` `<style>` block
- Fonts: Inter (body), Merriweather (headings)

### Multi-language

Language switching is controlled by `lang` state in App.tsx. All content is accessed via `content[lang]` from content.ts. When adding new text, add entries to all three language objects (de, en, hr).

### Environment

Optional `GEMINI_API_KEY` in `.env.local` for AI features.
