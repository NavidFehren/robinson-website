# Robinson Boat Tours

Private boat tours website for Mali Lošinj, Croatia. A single-page React application featuring tour information, booking inquiries, and a photo gallery.

## Tech Stack

- **React 19** + TypeScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **EmailJS** - Contact form email delivery

## Getting Started

```bash
npm install     # Install dependencies
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Build for production
npm run preview # Preview production build
```

## Project Structure

```
├── App.tsx           # Main app shell, language state management
├── content.ts        # All text content for all languages
├── types.ts          # TypeScript interfaces
├── pages/            # Section components
│   ├── Home.tsx
│   ├── Tours.tsx
│   ├── Destinations.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── FAQ.tsx
└── components/       # Shared components
    ├── Header.tsx
    └── Footer.tsx
```

## Multi-language Support

The website supports 4 languages:
- German (DE)
- English (EN)
- Croatian (HR)
- Italian (IT)

All content is managed in `content.ts`. When adding or editing text, update all language entries.

## Environment Variables

Create a `.env.local` file with the following:

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Yes | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |

## Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) for direct email delivery.

1. Create a free account at https://www.emailjs.com/
2. Add an email service (Gmail recommended)
3. Create an email template
4. Add credentials to `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.example` for a template.
