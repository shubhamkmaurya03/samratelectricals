# Samrat Electricals — Website

Official website of **Samrat Electricals (सम्राट इलेक्ट्रिकल्स)**, a home appliances & electricals shop at
**Gopalpur, Korauta, Varanasi, Uttar Pradesh**.

A fast, mobile-friendly static website (plain HTML, CSS and JavaScript — no build step).

## Pages
| Page | File |
|------|------|
| Home | `index.html` |
| Products (search + category filters) | `products.html` |
| Services & FAQ | `services.html` |
| About Us | `about.html` |
| Contact (enquiry form → WhatsApp, map, timings) | `contact.html` |
| Not found | `404.html` |

## Update shop details (phone, WhatsApp, timings)
All contact details live in **one place** — the `CONFIG` block at the top of `assets/js/main.js`:

```js
phone: "7905664929",     // shop mobile number (10 digits)
whatsapp: "7905664929",  // WhatsApp number (10 digits)
email: "samratelectricalstore@gmail.com",
hours: [...],            // shop timings
social: { facebook: "", instagram: "", youtube: "" }, // optional links
```

Products, categories and brands are also defined in `assets/js/main.js` (`CATEGORIES`, `PRODUCTS`, `BRANDS`).

## Logo
- `assets/img/logo.svg` / `logo.png` — full logo (emblem + wordmark), for print, signboard, visiting cards
- `assets/img/logo-mark.svg` / `logo-mark.png` — emblem only (crown + lightning bolt), for profile pictures
- `assets/img/favicon.png`, `apple-touch-icon.png` — browser / phone icons

## Run locally
Open `index.html` in a browser, or:
```bash
python3 -m http.server 8000
```

## Publish free with GitHub Pages
Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
The site will be live at `https://shubhamkmaurya03.github.io/samratelectricals/`.
