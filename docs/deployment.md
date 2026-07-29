# Deployment

## Build

Use the pinned package lock and Node.js 22.13 or newer. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin before the final production build.

## Sites deployment

The project includes `.openai/hosting.json` and is built with the Sites-compatible Vinext and Vite configuration. Publish only a saved version built from the exact pushed source state.

## Headers

Configure the security headers in `docs/security-model.md` at the host or Worker layer. Verify `robots.txt`, `sitemap.xml`, Open Graph image, canonical URL and structured data after the final domain is known.

## Post-deployment checks

- Home returns 200 and contains server-rendered content
- Portrait and certificate PDFs load
- GitHub and LinkedIn links are correct
- Project disclosures and Twin work by keyboard
- Minimal/reduced-motion modes stop continuous animation
- Mobile navigation opens, closes and returns focus appropriately
- No confidential values appear in HTML or JS bundles
