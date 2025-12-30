<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1U2Tau4Vf_gABJJpOFjEsO21a1yld1Tow

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set environment variables in `.env.local` (see below)
3. Run the app:
   `npm run dev`

## Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) for direct email delivery (200 emails/month free).

### Setup Steps:
1. Create a free account at https://www.emailjs.com/
2. Add an email service (Gmail recommended)
3. Create an email template (see example below)
4. Add credentials to `.env.local`:

### Email Template Example

**Subject:**
```
Nova upita za izlet od {{name}}
```

**Body:**
```
--- ENGLISH ---
Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Preferred Date: {{date}}
Number of Guests: {{guests}}
Tour Type: {{tourType}}
Price: {{price}}

Message:
{{message}}

--- HRVATSKI ---
Ime: {{name}}
Email: {{email}}
Telefon: {{phone}}
Željeni datum: {{date}}
Broj gostiju: {{guests}}
Vrsta izleta: {{tourType}}
Cijena: {{price}}

Poruka:
{{message}}
```

### Credentials
Add to `.env.local`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Yes | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |
| `GEMINI_API_KEY` | No | Optional Gemini API key for AI features |

See `.env.example` for a template.
