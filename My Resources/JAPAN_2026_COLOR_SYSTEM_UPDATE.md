# JAPAN 2026 – Landing Page Color System Update

## Objective

Update the current black-heavy color scheme to a warmer, culturally aligned Japanese-inspired palette that is lighter, more aspirational, and aligned with the brochure visuals.

Remove deep black dominance.
Introduce rice white base, sakura warmth, and indigo depth anchor.

---

# 1. REMOVE OLD COLORS

Replace the following:

- #111111 (Deep Black) → REMOVE
- Any pure black section backgrounds → REMOVE
- Harsh black overlays → REMOVE

Do not use black as a dominant background color anywhere.

---

# 2. NEW DESIGN TOKENS

## Core Colors

```css
:root {
  --color-primary-red: #D21F2B;
  --color-deep-indigo: #1B2230;
  --color-rice-white: #F6F1E8;
  --color-sakura: #F2C9CF;
  --color-fuji-blue: #6A86A8;
  --color-kyoto-gold: #BFA05A;

  --color-text-primary: #2C3443;
  --color-text-secondary: #8A9099;
  --color-border-soft: #E3DED4;
}