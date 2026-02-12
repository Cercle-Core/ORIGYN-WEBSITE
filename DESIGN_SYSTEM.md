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

## Component Documentation

### Layout Components

#### Section
**Location:** `components/layout/Section.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | — | Section content |
| divider | boolean | false | Add bottom border |
| background | string | 'default' | 'default' \| 'primary-800' \| 'neutral-900' |
| className | string | '' | Additional classes |

**When to use:** Every page section.
**When NOT to use:** Inline content (use Container).

---

#### Grid
**Location:** `components/layout/Grid.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | — | Grid items (use col-span-* for sizing) |
| className | string | '' | Additional classes |

**When to use:** Multi-column layouts.
**When NOT to use:** Single-column content.

---

#### Container
**Location:** `components/layout/Container.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | — | Content |
| className | string | '' | Additional classes |

**When to use:** Content max-width inside Section.
**When NOT to use:** Full-bleed sections.

---

#### Navbar
**Location:** `components/layout/Navbar.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'transparent' | 'transparent' \| 'solid' |
| scrollBehavior | boolean | true | Switch to solid on scroll |

**When to use:** All pages.
**When NOT to use:** N/A — global component.

---

#### Footer
**Location:** `components/layout/Footer.js`

**When to use:** All pages.
**When NOT to use:** N/A — global component.

---

### UI Components

#### Button
**Location:** `components/ui/Button.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | 'primary' \| 'secondary' \| 'ghost' \| 'danger' |
| disabled | boolean | false | Disabled state |
| children | ReactNode | — | Button label |

**States:** default, hover, active, disabled

**When to use:** CTAs, form submissions.
**When NOT to use:** Navigation links (use `<a>` or Next.js Link).

---

#### Card
**Location:** `components/ui/Card.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'default' | 'default' \| 'compact' \| 'large' \| 'highlighted' |
| icon | ReactNode | — | Optional icon |
| title | string | — | Card title |
| description | string | — | Card description |
| href | string | — | Optional "Learn more" link |

**When to use:** Feature grids, capabilities, use cases.
**When NOT to use:** Industry tiles (use IndustryTile).

---

#### CodeBlock
**Location:** `components/ui/CodeBlock.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| code | string | — | Code content |
| language | string | 'bash' | bash, javascript, typescript, json, python |
| className | string | '' | Additional classes |

**Features:** Syntax highlighting, copy button, language tag, dark background.

**When to use:** CLI examples, architecture references.
**When NOT to use:** Inline code (use `<code className="font-mono">`).

---

#### ArchitectureDiagram
**Location:** `components/ui/ArchitectureDiagram.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| layers | array | [] | `{ title, description, detail? }[]` |

**When to use:** Platform layers, system flow (Data → Model → Control).
**When NOT to use:** Simple feature lists (use Card).

---

#### IndustryTile
**Location:** `components/ui/IndustryTile.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | — | Industry name |
| problem | string | — | Short problem statement |
| href | string | — | Learn more link |

**When to use:** Industries page, use case grids.
**When NOT to use:** Platform capabilities (use Card).

---

#### TechnicalHighlight
**Location:** `components/ui/TechnicalHighlight.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | — | Panel title |
| diagram | ReactNode | — | Optional mini diagram |
| children | ReactNode | — | Technical explanation |

**When to use:** Architecture claims, system advantages.
**When NOT to use:** General marketing copy (use Card).

---

#### FadeIn
**Location:** `components/ui/FadeIn.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| delay | number | 0 | Ms delay before reveal |
| children | ReactNode | — | Content |
| className | string | '' | Additional classes |

**When to use:** Section reveals, content blocks.
**When NOT to use:** Every element — use sparingly.

---

## Motion Principles

- **Allowed:** Fade-in on scroll, slight slide transitions, subtle hover
- **Not allowed:** Bouncy, playful, excessive parallax

---

## Brand Principles

Design must feel:
- Engineered, not marketed
- Precise, not playful
- Structured, not decorative
- High-trust, not hype
- Minimal, not empty
