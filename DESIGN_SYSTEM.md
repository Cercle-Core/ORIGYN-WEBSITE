# Phase 2 Design System (Implementation Baseline)

## Brand System

### Color Tokens
- **Primary (industrial):** `--color-primary-900`, `--color-primary-800`, `--color-primary-700`
- **Accent (electric blue):** `--color-accent-500`, `--color-accent-600`, `--color-accent-700`
- **Neutral scale:** `--color-neutral-50` through `--color-neutral-900`
- **Semantic:** `--color-success`, `--color-warning`, `--color-error`, `--color-info`

### Typography
- Display/body: `Inter` fallback stack.
- Code: `JetBrains Mono` fallback stack.
- Utility classes: `.h1`, `.h2`, `.body-lg`, `.eyebrow`.

### Spacing Tokens
4px-base token system via CSS custom properties:
`--space-1` through `--space-9` representing 4, 8, 12, 16, 24, 32, 48, 64, 96.

### Grid
- Max container width: `--container-max: 1280px`
- Responsive behavior:
  - Desktop (12-col intent): major content split into 3-column feature cards
  - Tablet fallback: 2-column
  - Mobile fallback: single-column

### Motion
- Timing tokens: `--motion-fast`, `--motion-base`, `--motion-slow`
- Motion usage constrained to subtle hover and state transitions.

## UI Component Library

### Implemented Components
1. **Navbar** (`.top-nav`, `.nav-links`, `.logo`)
2. **Footer** (`.footer`, `.footer-grid`)
3. **Section Wrapper** (`.section`, `.section--muted`, `.container`)
4. **CTA Buttons** (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`)
5. **Feature Cards** (`.card`, `.card--highlight`)
6. **Architecture Diagram Blocks** (`.arch-grid`, `.arch-layer`)
7. **Industry Tiles** (`.tiles`, `.tile`)
8. **Code Snippet Block** (`.code-block`, `.code-head`, `.copy-btn`, `pre`)
9. **Technical Highlight Panel** (`.highlight-panel`)

## Governance Rules
- New UI uses token values first (color, spacing, radius, motion).
- No arbitrary spacing beyond token scale.
- Accent color should remain selective for calls-to-action and highlights.
- Reuse existing component classes before introducing a new pattern.
