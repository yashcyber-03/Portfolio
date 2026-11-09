# Yash Supare, Portfolio

React + Vite + Tailwind CSS portfolio with a Vercel serverless contact form.

## Run locally
```bash
npm install
cp .env.example .env     # set VITE_CONTACT_EMAIL
npm run dev
npm run build            # production build into dist/
```
The contact form posts to `/api/contact`, which only exists on Vercel (or `npx vercel dev`). With plain `npm run dev` the form shows an error and offers the mailto fallback.

## Things to edit
- `src/data.js`: social links, project links and descriptions, skills, services, journey. Empty project links show "link coming soon" and stay disabled.
- `public/profile.jpg`: add your portrait. Until then a "YS" monogram shows.
- Project previews are placeholders in `src/components/Projects.jsx` (`Preview`). Replace with `<img>` screenshots.

## Contact form email delivery
1. Create a free account at resend.com and an API key.
2. In Vercel > Project > Settings > Environment Variables add: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `VITE_CONTACT_EMAIL`.
3. Redeploy. Until the keys exist the API returns an error and the page never shows a fake success.

## Upload to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## Deploy on Vercel
1. vercel.com > Add New > Project > import the repo.
2. Framework preset: Vite (build `npm run build`, output `dist`).
3. Add the environment variables above, then Deploy.
