# Conard Children's Place — Website

A production-ready React + Vite + Tailwind CSS website for The Children's Place at
Conard High School, West Hartford CT.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
childrens-place/
├── public/
│   ├── logo.png              ← YOUR LOGO (replace this!)
│   └── images/
│       ├── hero.jpg          ← Hero background photo (replace)
│       ├── classroom.jpg     ← About section photo (replace)
│       ├── gallery1.jpg      ← Gallery photo 1 (replace)
│       ├── gallery2.jpg      ← Gallery photo 2 (replace)
│       ├── gallery3.jpg      ← Gallery photo 3 (replace)
│       ├── gallery4.jpg      ← Gallery photo 4 (replace)
│       ├── gallery5.jpg      ← Gallery photo 5 (replace)
│       ├── gallery6.jpg      ← Gallery photo 6 (replace)
│       ├── gallery7.jpg      ← Gallery photo 7 (replace)
│       ├── gallery8.jpg      ← Gallery photo 8 (replace)
│       └── gallery9.jpg      ← Gallery photo 9 (replace)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Navigation bar (mobile + desktop)
│   │   ├── Hero.jsx          ← Hero section with CTA
│   │   ├── About.jsx         ← Program description + feature cards
│   │   ├── Gallery.jsx       ← Photo grid with lightbox
│   │   ├── Lightbox.jsx      ← Full-screen photo viewer
│   │   ├── Schedule.jsx      ← Google Slides schedule embed
│   │   ├── Newsletter.jsx    ← Google Doc newsletter embed
│   │   ├── Registration.jsx  ← Enrollment info + email CTA
│   │   ├── FAQ.jsx           ← Accordion FAQ section
│   │   └── Footer.jsx        ← Footer with contact info
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

## 🖼 Adding Your Photos

1. Create a folder: `public/images/`
2. Drop your photos in with these exact filenames:
   - `logo.png` → into `public/` (your logo file)
   - `hero.jpg` → full-bleed hero background
   - `classroom.jpg` → about section photo
   - `gallery1.jpg` through `gallery9.jpg` → gallery photos

> If a file is missing, the site automatically falls back to a placeholder image from
> Unsplash so it never breaks.

**To add MORE gallery photos:**  
Open `src/components/Gallery.jsx` and add entries to the `GALLERY_IMAGES` array.

---

## 📊 Updating Embeds

### Google Slides Schedule
Open `src/components/Schedule.jsx` and update `SLIDES_EMBED_URL`:
```js
const SLIDES_EMBED_URL = 'YOUR_GOOGLE_SLIDES_EMBED_URL_HERE'
```
Get this from: Google Slides → File → Share → Publish to web → Embed

### Newsletter (Google Doc)
Open `src/components/Newsletter.jsx` and update `NEWSLETTER_EMBED_URL`:
```js
const NEWSLETTER_EMBED_URL = 'YOUR_GOOGLE_DOC_EMBED_URL_HERE'
```
Get this from: Google Doc → File → Share → Publish to web → Embed

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option B — GitHub
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import Git repo
3. Vercel auto-detects Vite — just click **Deploy**

### Option C — Drag & Drop
```bash
npm run build
```
Then drag the `dist/` folder into [vercel.com/new](https://vercel.com/new).

---

## 🎨 Customizing Colors

Edit `tailwind.config.js` to change the brand palette:

```js
colors: {
  brand: {
    coral:  '#D9543A',   // primary red/coral
    orange: '#E8753A',   // hover state
    yellow: '#F5B942',   // accent / highlights
    cream:  '#FFF7EE',   // background
    green:  '#5B9E63',   // success / nature
    navy:   '#1E3A5F',   // text / dark sections
  }
}
```

---

## 📞 Contact Info (to update)

All contact details are in:
- `src/components/Registration.jsx` → `CONTACT_EMAIL`, `REGISTRATION_LINK`
- `src/components/Footer.jsx` → address, phone, email

---

## ✅ Features

- [x] Fully responsive — mobile, tablet, desktop
- [x] Smooth scroll navigation with sticky header
- [x] Hero section with animated entrance
- [x] About section with feature cards and scroll animations
- [x] Photo gallery grid with lightbox (keyboard nav, arrow keys, ESC)
- [x] Embedded Google Slides schedule
- [x] Embedded Google Doc newsletter
- [x] Registration section with email CTA
- [x] Accordion FAQ section (8 questions)
- [x] Footer with contact info, quick links
- [x] No Base44 branding whatsoever
- [x] Vercel-ready (`vercel.json` included)
- [x] Clean component structure — easy to edit
