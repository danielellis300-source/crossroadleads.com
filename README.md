# crossroadleads.com

Website for **Crossroad Leads**, a web design and local SEO business serving Indianapolis and Central Indiana.

Built with [Astro](https://astro.build) as a static site and hosted on Cloudflare Pages.

## Quick edits

| What | Where |
|---|---|
| Phone, email, Web3Forms key | `src/data/site.ts` → `site` |
| Services | `src/data/site.ts` → `services` |
| Pricing tiers | `src/data/site.ts` → `pricing` |
| City pages (12) | `src/data/site.ts` → `cities` |
| Guarantees / process | `src/data/site.ts` |
| Blog posts | `src/content/blog/*.md` (add a new `.md` file to publish) |
| Colors / fonts | `src/styles/global.css` (`:root` variables) |
| Social share image | `npm run og` regenerates `public/og-image.png` |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (GitHub + Cloudflare Pages)

1. **Push to GitHub** (private repo `crossroadleads.com`).
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, then pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. Deploy. Every push to `main` redeploys automatically.
5. **Custom domain:** in the Pages project, go to **Custom domains** and add `crossroadleads.com` and `www.crossroadleads.com`. If the domain's DNS is on Cloudflare, records are created automatically.
6. **www → apex redirect:** Cloudflare dashboard → **Rules → Redirect Rules**: redirect `www.crossroadleads.com/*` to `https://crossroadleads.com/${1}` (301).

## After launch

- Submit `https://crossroadleads.com/sitemap-index.xml` in [Google Search Console](https://search.google.com/search-console) and Bing Webmaster Tools.
- Create a Google Business Profile (service-area business, hide address) using the same name and phone number.
- Send a test form submission and confirm it arrives at the email tied to the Web3Forms key.
