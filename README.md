# Aryan Digital Twin

An evidence-led, interactive engineering portfolio for Aryan Tripathi. The experience presents AI/ML, industrial analytics, computer vision, backend systems and business software as an original navigable voyage.

## Product

- Cinematic server-rendered hero with a compact real portrait
- Procedural voyage canvas with Full, Balanced and Minimal performance modes
- Nine source-audited project case studies with architecture, evidence and limitations
- Real-workflow labels for Berry merger tools and travel billing software, explicitly marked user-confirmed
- Restrained professional experience section
- Evidence-linked skills instead of proficiency percentages
- Searchable certificate vault with public PDFs
- Engineering timeline
- Deterministic, cited Aryan Digital Twin with no paid or external model
- Conventional mobile navigation, keyboard support and reduced-motion behavior

## Architecture

The portfolio is a static-first Next.js/TypeScript application built through Vinext for Cloudflare-compatible output. Structured content in `content/portfolio.ts` powers both the UI and the local Digital Twin. There is no application database, public upload route, contact-message store or client secret.

See `docs/system-architecture.md` for diagrams and boundaries.

## Technology

- Next.js 16 and React 19
- TypeScript
- Vinext and Vite
- Cloudflare Worker-compatible output
- CSS 3D transforms and a lightweight Canvas 2D route scene
- Node test runner

No Three.js dependency is required: the first version delivers the game-like spatial feel with a much smaller runtime and a complete semantic fallback.

## Local setup

Requirements:

- Node.js 22.13 or newer
- npm

Install dependencies, run the development script and open the printed local URL. The project uses the pinned lockfile.

## Environment

Copy `.env.example` to `.env.local` only when configuring the canonical production domain:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

No secret environment variable is required.

## Content updates

1. Update the relevant audit inventory.
2. Edit typed public content in `content/portfolio.ts`.
3. Place approved public assets under `public/`.
4. Run lint, production build and tests.
5. Review the page for confidential information before publishing.

See `docs/content-guide.md`.

## Digital Twin

The Twin normalizes a short question, refuses unsupported personal/private topics, scores keyword overlap against a verified knowledge set, returns a composed answer and cites portfolio anchors. It does not make network requests or persist chat content.

See `docs/digital-twin.md`.

## Testing

- `npm run lint`
- `npm run build`
- `npm test`

The rendered HTML test checks core identity, project, navigation, Digital Twin, robots and sitemap output.

## Security

The portfolio intentionally excludes company data, credentials, private repositories and unverified product claims. Public-project security findings are documented without copying secret values.

See `SECURITY.md` and `docs/security-model.md`.

## Performance and accessibility

- Essential content server-renders
- Canvas has capped pixel density and deterministic geometry
- Minimal mode does not run a continuous animation loop
- Reduced-motion disables continuous motion and transforms
- All important information has semantic HTML
- Skip link, visible focus, keyboard controls and native disclosures
- Mobile uses conventional navigation

## Known limitations

- Orvion could not be audited because its source was not in the shared workspace.
- A final résumé PDF and several screenshots/videos have not been supplied.
- The canonical production domain must replace placeholder sitemap/schema URLs.
- Some public project deployments require security hardening.
- Browser visual QA was not requested in the initial brief; production build and rendered-output tests are the required baseline.

## Roadmap

- Private Orvion source audit
- Approved project screenshots and captioned videos
- Public résumé
- Certificate preview thumbnails
- Security hardening of live file-processing demos
- Optional local Ollama adapter layered behind deterministic Twin retrieval

## License

Code is available under the MIT License. Personal content, portrait, certificates and résumé remain the property of Aryan Tripathi and are not relicensed for reuse.
