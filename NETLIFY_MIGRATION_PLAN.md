# Migration Plan: Robinson Boat Tours → Netlify

## Executive Summary

Vollständige Migration von GitHub Pages zu Netlify **inklusive Wechsel von EmailJS zu Netlify Forms**.

**Free Tier Status:** ✅ Ausreichend für diese Website

---

## 1. Free Tier Analyse

| Metrik | Geschätzt | Netlify Free | Status |
|--------|-----------|--------------|--------|
| Bandwidth | ~1-5 GB/Monat | 100 GB | ✅ ~20x Puffer |
| Build Minutes | ~2 min/build | 300 min/Monat | ✅ ~150 Builds |
| Form Submissions | ~10-50/Monat? | 100/Monat | ✅ Ausreichend |

**Bei Überschreitung:** Site pausiert (keine Überraschungskosten!), Benachrichtigungen bei 50/75/100%.

---

## 2. Migrations-Schritte

### Phase 1: Code-Änderungen für Netlify

#### 1.1 `netlify.toml` erstellen (Root)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 1.2 `public/_redirects` erstellen (Backup für SPA)
```
/*    /index.html   200
```

#### 1.3 `index.html` - Hidden Form für Netlify Detection
```html
<!-- Vor </body> einfügen -->
<form name="booking" netlify netlify-honeypot="bot-field" hidden>
  <input name="bot-field" />
  <input type="text" name="name" />
  <input type="email" name="email" />
  <input type="tel" name="phone" />
  <input type="date" name="date" />
  <input type="number" name="guests" />
  <input type="text" name="tourType" />
  <input type="text" name="price" />
  <textarea name="message"></textarea>
</form>
```

### Phase 2: Contact.tsx komplett überarbeiten

**Änderungen:**
1. `@emailjs/browser` Import entfernen
2. EmailJS-Logik durch `fetch()` ersetzen
3. Hidden inputs für Netlify hinzufügen
4. Honeypot-Feld für Spam-Schutz

**Neue handleSubmit Funktion:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    const form = e.target as HTMLFormElement;
    const calculatedPrice = calculatePrice(formData.tourType, parseInt(formData.guests) || 1);
    const enTour = allContent.en.tours.items.find(t => t.id === formData.tourType);
    const hrTour = allContent.hr.tours.items.find(t => t.id === formData.tourType);
    const tourName = `${hrTour?.name || ''} / ${enTour?.name || ''}`;

    const formDataToSend = new FormData();
    formDataToSend.append('form-name', 'booking');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || 'Not provided');
    formDataToSend.append('date', formData.date);
    formDataToSend.append('guests', formData.guests);
    formDataToSend.append('tourType', tourName);
    formDataToSend.append('price', calculatedPrice ? `${calculatedPrice}€` : 'Na upit / On request');
    formDataToSend.append('message', formData.message || 'No message');

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataToSend as any).toString()
    });

    if (!response.ok) throw new Error('Network error');
    setSubmitted(true);
  } catch (err) {
    setError(content.form.error || 'Failed to send. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
```

**Form JSX Änderungen:**
```jsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Hidden fields für Netlify */}
  <input type="hidden" name="form-name" value="booking" />
  <input type="hidden" name="bot-field" />

  {/* Rest des Forms bleibt gleich */}
</form>
```

### Phase 3: Dependencies & Cleanup

```bash
# EmailJS entfernen
npm uninstall @emailjs/browser

# .env.local - EmailJS Variablen können entfernt werden
# VITE_EMAILJS_SERVICE_ID  → löschen
# VITE_EMAILJS_TEMPLATE_ID → löschen
# VITE_EMAILJS_PUBLIC_KEY  → löschen
```

### Phase 4: Netlify Account & Deployment

1. **Account erstellen:** netlify.com → Sign up with GitHub
2. **Site erstellen:** "Add new site" → "Import an existing project"
3. **Repository verbinden:** `robinson_website` auswählen
4. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy:** Klick auf "Deploy site"

### Phase 5: Email-Benachrichtigungen einrichten

1. Netlify Dashboard → Site → Forms
2. "Form notifications" → "Add notification"
3. "Email notification" auswählen
4. Email-Adresse eingeben (z.B. booking@robinsonboattours.com)
5. Speichern

### Phase 6: DNS-Umstellung (detailliert)

#### Vorbereitung (1-2 Tage vorher)
1. **TTL reduzieren:** Bei deinem DNS-Provider die TTL auf 300s (5 min) setzen
2. **Aktuelle DNS notieren:** Falls Rollback nötig

#### Bei Netlify
1. Site settings → Domain management → Add custom domain
2. `robinsonboattours.com` eingeben
3. Netlify zeigt dir die benötigten DNS-Records

#### Bei deinem DNS-Provider

**Option A: Netlify DNS nutzen (Empfohlen)**
Nameserver ändern zu:
```
dns1.p03.nsone.net
dns2.p03.nsone.net
dns3.p03.nsone.net
dns4.p03.nsone.net
```

**Option B: Externe DNS behalten**
```
Typ    Name    Wert
A      @       75.2.60.5
CNAME  www     [deine-site].netlify.app
```

#### SSL-Zertifikat
- Wird automatisch von Netlify erstellt (Let's Encrypt)
- Kann bis zu 24h dauern nach DNS-Propagation
- HTTPS erzwingen: Site settings → Domain management → HTTPS → Force HTTPS

### Phase 7: Alte Infrastruktur entfernen

```bash
# GitHub Pages Workflow löschen
rm .github/workflows/deploy.yml

# Optional: Leeren .github Ordner entfernen
rmdir .github/workflows
rmdir .github
```

**GitHub Repository Settings:**
1. Settings → Pages → Source: "None"
2. Speichern

---

## 3. Zusammenfassung: Alle Datei-Änderungen

| Datei | Aktion | Beschreibung |
|-------|--------|--------------|
| `netlify.toml` | **Erstellen** | Build & Redirect Config |
| `public/_redirects` | **Erstellen** | SPA Fallback |
| `index.html` | **Ändern** | Hidden Form hinzufügen |
| `pages/Contact.tsx` | **Ändern** | EmailJS → Netlify Forms |
| `package.json` | **Ändern** | EmailJS Dependency entfernen |
| `.env.local` | **Ändern** | EmailJS Vars entfernen |
| `.github/workflows/deploy.yml` | **Löschen** | Nicht mehr benötigt |

---

## 4. Vorteile nach Migration

| Feature | GitHub Pages + EmailJS | Netlify |
|---------|------------------------|---------|
| Deployment | GitHub Actions | ✅ Auto-Deploy |
| PR Previews | ❌ | ✅ Deploy Previews |
| Rollbacks | Manuell | ✅ One-click |
| Forms | Extern (EmailJS) | ✅ Built-in |
| Spam-Schutz | Manuell | ✅ Honeypot + reCAPTCHA |
| Form-Dashboard | ❌ | ✅ Alle Submissions sichtbar |
| Analytics | ❌ | ✅ Basic (free) |
| Serverless | ❌ | ✅ Functions möglich |
| SSL | ✅ | ✅ |
| Kosten | Kostenlos | ✅ Kostenlos |

---

## 5. Risiken & Mitigation

| Risiko | Mitigation |
|--------|------------|
| DNS Downtime | TTL vorher auf 5min setzen, außerhalb der Hauptsaison umstellen |
| Verlorene Buchungen | Testen auf .netlify.app Domain bevor DNS umgestellt wird |
| Build-Fehler | Lokal `npm run build` testen |
| Form nicht erkannt | Hidden form in index.html muss exakt matchen |

---

## 6. Checkliste zur Ausführung

- [ ] `netlify.toml` erstellen
- [ ] `public/_redirects` erstellen
- [ ] `index.html` Hidden Form hinzufügen
- [ ] `pages/Contact.tsx` umschreiben
- [ ] `npm uninstall @emailjs/browser`
- [ ] `.env.local` aufräumen
- [ ] Lokal testen: `npm run build`
- [ ] Netlify Account erstellen
- [ ] Site deployen
- [ ] Auf `[site].netlify.app` testen
- [ ] Email-Benachrichtigung einrichten
- [ ] Test-Buchung absenden
- [ ] DNS TTL reduzieren (1-2 Tage vorher)
- [ ] Custom Domain bei Netlify hinzufügen
- [ ] DNS Records umstellen
- [ ] SSL prüfen (kann bis 24h dauern)
- [ ] GitHub Pages deaktivieren
- [ ] `.github/workflows/deploy.yml` löschen
- [ ] Alten CNAME aus dist entfernen

---

## Quellen

- [Netlify Pricing](https://www.netlify.com/pricing/)
- [Netlify Forms Setup](https://docs.netlify.com/forms/setup/)
- [Netlify Forms in React](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/)
- [Vite on Netlify](https://docs.netlify.com/frameworks/vite/)
- [Netlify Free Tier Limits](https://www.freetiers.com/directory/netlify)
