# Jax Riddell — Portfolio

Personal portfolio site for IT and systems support work, showing experience, skills, and homelab projects (Active Directory, pfSense, Splunk, Azure).

Live at [jaxr.dev](https://jaxr.dev).

## Stack

- [Next.js](https://nextjs.org) 15 (App Router, static export)
- React 19
- Tailwind CSS 4
- [particles.js](https://github.com/VincentGarreau/particles.js) background (loaded from CDN)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Build a static site into `out/`      |
| `npm run lint`  | Run ESLint                           |

## Structure

- `app/` — layout, metadata, and the single page
- `Components/` — page sections (About, Technologies, WorkExperience, Projects) plus Header and the particles background
- `public/` — profile photo and resume PDF

## Deployment

`next.config.mjs` uses `output: 'export'`. When built under GitHub Actions it sets a `/github-portfolio` base path; local and custom-domain builds use none.
