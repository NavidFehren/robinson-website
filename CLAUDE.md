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

Language switching is controlled by `lang` state in App.tsx. All content is accessed via `content[lang]` from content.ts. When adding new text, add entries to all four language objects (de, en, hr, it).

### Contact Form

Uses EmailJS for direct email delivery. Form component: `pages/Contact.tsx`.

### Environment

Required in `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=xxx   # EmailJS service ID
VITE_EMAILJS_TEMPLATE_ID=xxx  # EmailJS template ID
VITE_EMAILJS_PUBLIC_KEY=xxx   # EmailJS public key
```

Optional:
```
GEMINI_API_KEY=xxx            # For AI features
```
