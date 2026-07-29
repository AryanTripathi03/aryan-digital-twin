# Design System

## Principles

1. Evidence is the visual hierarchy: status, source and limitation remain close to every claim.
2. Adventure without imitation: the experience is an original engineering voyage, not a reproduction of any anime, game or franchise.
3. Depth is progressive: semantic HTML works first; canvas, parallax and 3D transforms enhance capable devices.
4. Motion directs attention and never blocks navigation.
5. The portrait is a compact identity signal, not a giant hero photograph.

## Visual language

The interface combines a technical chart table, a voyage map and a restrained field notebook. Project case studies are “islands,” the timeline is a route, and the Digital Twin is a verified communications console.

## Tokens

| Role | Value |
|---|---|
| Deep ink | `#071114` |
| Panel | `#0d1d21` |
| High panel | `#11252a` |
| Text | `#dff0eb` |
| Muted | `#8da6a2` |
| Primary accent / gold | `#f7b650` |
| System accent / sea | `#56d9d7` |
| Alert accent / coral | `#ff7a61` |

Gold identifies navigation, evidence and primary action. Sea identifies active/verified system state. Coral is limited to compass/alert semantics.

## Typography

- Display and interface: Geist Sans
- Technical labels and coordinates: Geist Mono
- Occasional narrative emphasis: system Georgia
- Display text uses compact tracking; body text stays between 1.55 and 1.8 line-height.

## Spacing

The base rhythm is 4px. Common steps are 8, 12, 16, 24, 32, 48, 64, 96 and 144px. Section padding uses responsive `clamp()` values.

## Motion system

- Canvas route: animated dashed path, pulsing nodes and star field
- Portrait: pointer-relative perspective and a slow scanning line
- Project islands: shallow lift and tilt on hover
- Compass: subtle directional drift
- Mobile and reduced-motion: all continuous effects stop or become still
- Modes: Full, Balanced and Minimal; initial mode derives from reduced-motion and CPU core count

## Component inventory

- Fixed header and conventional mobile menu
- Voyage canvas with semantic section fallback
- Portrait identity card
- Primary/quiet actions
- Section coordinate labels
- Project islands with native `<details>` case studies
- Architecture route
- Private-coordinate audit card
- Experience log
- Evidence-linked skill loadout
- Searchable credential vault
- Horizontal timeline
- Deterministic Digital Twin console
- Trust/evidence layer
- Professional contact panel

## Responsive behavior

- Desktop: cinematic composition, route canvas, 12-column project atlas
- Tablet: two-column project atlas and compact header
- Mobile: conventional full-screen menu, single-column content and stopped 3D transform
- Important content is never available only through hover, canvas or color.

## Accessibility

- Semantic headings, sections, articles, lists, links and native disclosure controls
- Skip link, visible focus, keyboard-operable menu and assistant
- Live region for Digital Twin responses
- Meaningful portrait alternative text
- Reduced-motion and manual Minimal mode
- No canvas-dependent information

## States

- Loading: essential HTML server-renders; canvas begins only after hydration
- Error: canvas absence does not affect content; missing certificate PDFs display a text state
- Empty: certificate search shows an explicit no-results message
- Orvion: unavailable evidence is an intentional audit-pending state, not a fake feature card
