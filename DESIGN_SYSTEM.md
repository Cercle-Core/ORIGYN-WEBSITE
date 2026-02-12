# ORIGYN Design System

**Industrial intelligence. Engineered, not marketed.**

---

## Design Governance Rules

To prevent drift, enforce these rules:

| Rule | Why |
|------|-----|
| **No new colors** outside the defined palette | Consistency = trust |
| **No new spacing values** outside the 4px scale (4, 8, 12, 16, 24, 32, 48, 64, 96) | Predictable rhythm |
| **No new font weights** without documented reason | Typography hierarchy integrity |
| **No arbitrary shadows** | Use design tokens only |
| **All new components** must reuse tokens | Avoid redesign debt |

---

## Token Reference

### Colors
- **Primary**: `primary-900`, `primary-800`, `primary-700` (backgrounds, nav, hero)
- **Accent**: `accent`, `accent-hover` (CTAs, highlights, active states)
- **Neutral**: `neutral-50` → `neutral-900` (text, borders, cards)
- **Semantic**: `success`, `warning`, `error`, `info`

### Typography
- **Display**: `text-h1`, `text-h2`, `text-h3`, `text-h4`
- **Body**: `text-body-lg`, `text-body`, `text-caption`, `text-code`
- **Fonts**: Inter (display/body), system mono (code)

### Spacing
4px base: `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `96`

### Grid
- Desktop: 12 columns, max 1200–1400px
- Tablet: 8 columns
- Mobile: 4 columns
- Gutter: 24px

---

## Components

| Component | Location | When to use |
|-----------|----------|-------------|
| Section | `components/layout/Section` | Every page section |
| Grid | `components/layout/Grid` | Multi-column layouts |
| Container | `components/layout/Container` | Content max-width |
| Navbar | `components/layout/Navbar` | All pages |
| Footer | `components/layout/Footer` | All pages |
| Button | `components/ui/Button` | CTAs, actions |
| Card | `components/ui/Card` | Features, capabilities |
| CodeBlock | `components/ui/CodeBlock` | CLI, code examples |

---

## Motion Principles

- **Allowed**: Fade-in on scroll, slight slide transitions, subtle hover
- **Not allowed**: Bouncy, playful, excessive parallax

---

## Brand Principles

Design must feel:
- Engineered, not marketed
- Precise, not playful
- Structured, not decorative
- High-trust, not hype
- Minimal, not empty
