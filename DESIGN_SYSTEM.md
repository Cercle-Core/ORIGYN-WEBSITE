# Phase 2 Design System (Implementation)

## 1) Brand System

### 1.1 Positioning Rules
- Engineered, not marketed
- Precise, not playful
- Structured, not decorative
- High-trust, not hype
- Minimal, not empty

### 1.2 Color Tokens
- **Primary (industrial):** `--color-primary-900`, `--color-primary-800`, `--color-primary-700`
- **Accent (electric blue):** `--color-accent-500`, `--color-accent-600`, `--color-accent-700`
- **Neutral:** `--color-neutral-50` through `--color-neutral-900`
- **Semantic:** `--color-success`, `--color-warning`, `--color-error`, `--color-info`

### 1.3 Typography
- Display/body stack: `Inter`, `Segoe UI`, `Roboto`, system sans fallback.
- Code stack: `JetBrains Mono`, SFMono/Consolas fallback.
- Hierarchy utilities:
  - `.h1`
  - `.h2`
  - `.body-lg`
  - `.eyebrow`

### 1.4 Spacing (4px base)
`--space-1` to `--space-9` = 4, 8, 12, 16, 24, 32, 48, 64, 96.

### 1.5 Grid System
- Container max width: `--container-max: 1280px`
- Gutter: `--grid-gutter: 24px`
- Responsive columns:
  - Desktop: 12 (`.ds-grid` default)
  - Tablet: 8 (`@media max-width: 1024px`)
  - Mobile: 4 (`@media max-width: 760px`)
- Span mappings:
  - `.ds-grid--3col` => 4-column spans on desktop
  - `.ds-grid--2col` => 6-column spans on desktop

### 1.6 Motion
- Tokens: `--motion-fast`, `--motion-base`, `--motion-slow`
- Reduced-motion support via `prefers-reduced-motion` override.

---

## 2) Component Library

### 2.1 `Navbar`
**File:** `components/layout/Navbar.js`

**Props**
- `variant: 'transparent' | 'solid' | 'sticky'` (default `sticky`)

**States / Behavior**
- Sticky baseline
- Scroll transition (`sticky` promotes to solid style after scroll)
- Mobile menu open/close state
- Primary nav links + CTA

**Use when**
- Top-level page shell navigation

**Do not use when**
- Embedded sub-panels or in-card navigation

---

### 2.2 `Footer`
**File:** `components/layout/Footer.js`

**Props**
- Static columns in current implementation

**Use when**
- Closing global page sections with dense information architecture

---

### 2.3 `SectionWrapper`
**File:** `components/layout/SectionWrapper.js`

**Props**
- `id?: string`
- `muted?: boolean`
- `children`

**Use when**
- Standardized vertical rhythm and container width is required

---

### 2.4 `Button`
**File:** `components/ui/Button.js`

**Props**
- `as?: 'button' | 'a'`
- `href?: string`
- `variant?: 'primary' | 'secondary' | 'ghost' | 'danger'`
- `disabled?: boolean`
- `children`

**States**
- Default / hover / active / disabled / focus-visible

**Use when**
- Any actionable CTA in the platform shell

**Do not use when**
- Non-interactive labels

---

### 2.5 `FeatureCard`
**File:** `components/patterns/FeatureCard.js`

**Props**
- `title: string`
- `description: string`
- `highlighted?: boolean`

---

### 2.6 `ArchitectureLayerBlock`
**File:** `components/patterns/ArchitectureLayerBlock.js`

**Props**
- `title: string`
- `description: string`

---

### 2.7 `IndustryTile`
**File:** `components/patterns/IndustryTile.js`

**Props**
- `title: string`
- `description: string`
- `href?: string`

---

### 2.8 `CodeSnippetBlock`
**File:** `components/patterns/CodeSnippetBlock.js`

**Props**
- `language?: string`
- `title: string`
- `code: string`

**Behavior**
- Copy-to-clipboard with user feedback (`Copy`, `Copied`, `Failed`)
- Tokenized lightweight syntax highlighting classes

---

### 2.9 `TechnicalHighlightPanel`
**File:** `components/patterns/TechnicalHighlightPanel.js`

**Props**
- `title: string`
- `children`

---

## 3) Governance Rules
- No new colors outside token system without design approval.
- No spacing values outside 4px token scale.
- No random shadows/border radii outside standardized tokens.
- All new page surfaces should compose existing components first.
- Accent color usage should remain directional (CTAs, active states, highlights).
