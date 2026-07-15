# Jyothi Vardhan — Portfolio

A production-ready personal portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (page/scroll animations)
- React Router (multi-page routing)
- React Icons
- EmailJS (contact form)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, ProjectCard, SkillCard, CertCard,
                Reveal (scroll animations), Backdrop (ambient background), TypingText, Button
  data/
    portfolio.js  Single source of truth for all content (profile, projects, skills,
                  certifications, internships, education, goals)
  pages/        One file per route: Home, About, Skills, Projects, Certifications,
                Internships, Resume, Contact, NotFound
public/
  favicon.svg, og-image.png, robots.txt, sitemap.xml, resume.pdf
```

To update any content (add a project, change a bio line, add a certification), edit
`src/data/portfolio.js` — it flows through every page automatically.

## Connecting the contact form (EmailJS)

1. Create a free account at https://www.emailjs.com/
2. Create an Email Service and an Email Template.
3. Open `src/pages/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
   const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
   const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
   ```
   with the values from your EmailJS dashboard.

Until configured, the form will show a friendly fallback message pointing visitors to
your email address directly — it won't crash or silently fail.

## Replacing the résumé

Swap `public/resume.pdf` with your real PDF (same filename), or update the link in
`src/pages/Resume.jsx` if you rename the file. A styled placeholder PDF matching the
site theme is included so the download button works out of the box.

## Deploying

This is a static Vite build, so it deploys anywhere static hosting is supported —
Vercel, Netlify, GitHub Pages, or Cloudflare Pages all work with zero config beyond
`npm run build` producing `dist/`.

If deploying to a path-based host (e.g. GitHub Pages under a subpath), you may need to
set `base` in `vite.config.js` and switch `BrowserRouter` to `HashRouter` in `main.jsx`.

## Before going live

- [ ] Swap the placeholder email in `src/data/portfolio.js` (`profile.email`) for your real inbox
- [ ] Configure EmailJS (see above)
- [ ] Replace `public/resume.pdf` with your real résumé
- [ ] Update `og-image.png` and canonical URLs in `index.html` once you have a real domain
- [ ] Add real GitHub repo links / live demo links to each project in `src/data/portfolio.js`
