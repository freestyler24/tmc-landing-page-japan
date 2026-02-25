# 🏆 Japan 2026 – Gold Standard AI Coding Prompt

## Institutional High-Converting Landing Page Build Specification

---

## ROLE

You are a senior full-stack engineer and CRO specialist.

Build a high-converting institutional landing page for Japan 2026.

This is NOT a brochure website.
This is a controlled, psychology-driven conversion environment.

---

# 🎯 PRIMARY OBJECTIVE

Maximize:
Secure Your Child’s Seat for Japan 2026 registrations.

Secondary:
Brochure downloads.

---

# 🧱 TECH STACK

- Next.js (App Router)
- Vercel deployment
- Vercel serverless API routes
- Airtable as temporary CRM
- Mobile-first architecture
- Lighthouse score 90+

---

# 🧭 HEADER (SEPARATE FROM HERO)

Header must be its own component.
It must NOT be embedded inside the hero section.

### Header Structure

Left:
JAPAN 2026 (Text logo)

Center:
Anchor scroll links:
- Programme
- Safety
- Investment
- FAQs

Right:
Primary CTA button:
Secure Your Child’s Seat

### Header Rules

- Height: 72–80px
- White background
- Thin bottom divider
- Sticky on scroll
- No dropdown menus
- No external links
- No homepage link
- No social icons
- Clean minimal layout

Mobile:
- Collapsible anchor menu
- CTA remains visible
- Sticky bottom CTA allowed

---

# 🟥 HERO SECTION (SEPARATE COMPONENT)

Hero must sit BELOW header.

Hero includes:

- School logos (credibility layer)
- Outcome-driven headline
- Subheadline: 09 Days | 04 Cities | October 2026 | Limited to 45 Students
- 3 benefit bullets (results focused)
- Countdown timer
- Primary CTA

No navigation inside hero.

---

# 🎨 VISUAL & DESIGN SYSTEM

## Design Philosophy

Japanese-inspired minimalism:

- Ma (intentional whitespace)
- Shibui (understated elegance)
- Precision
- Calm authority

No tourism clutter.
No corporate template feel.

---

## Color System

Primary Red: #C8102E  
Deep Charcoal: #111111  
Warm Off-White: #F5F3EF  
Kyoto Gold Accent: #B89B5E (minimal use)

Rules:
- No gradients
- No neon
- No blue tech theme
- High contrast CTA

---

## Typography

Headings: Noto Serif JP (or similar Japanese serif)
Body: Inter (or clean sans-serif)

Scale:
- H1: 56px
- H2: 40px
- H3: 26px
- Body: 17px
- Small: 14px

Line-height: 1.6
Generous spacing.

---

## Layout System

- Max width: 1200px
- Mobile-first CSS
- 80px section spacing mobile
- 120px section spacing desktop
- Clean vertical rhythm

Background alternation:
Off-white → Red → Off-white → Charcoal

---

## Button System

Primary:
- Red background
- White text
- 16px 32px padding
- 8px radius
- Subtle hover lift

Secondary:
- Red outline
- Transparent
- Fill on hover

One dominant CTA repeated throughout page.

---

# 🧠 CONVERSION STRUCTURE (ORDER LOCKED)

1. Header (separate)
2. Hero
3. Trailer Video
4. Problem → Outcome
5. Programme Experience
6. Trust & Safety
7. Testimonials
8. FAQ
9. Investment
10. Brochure Section
11. Registration Section
12. Final Conversion Block
13. Footer

---

# 🎬 TRAILER VIDEO SECTION

- Headline: Experience the Journey
- Lazy-loaded YouTube embed
- 16:9 responsive
- No autoplay with sound
- Supporting benefit copy
- CTA below video

---

# ⭐ TESTIMONIAL SECTION

- 3–6 real parent testimonials
- Clean responsive grid
- Optional subtle star rating
- CTA banner after section

---

# 📘 FAQ SECTION

Accordion layout.
SEO FAQ schema included.
Only one expanded at a time.
Smooth 0.3s animation.

CTA banner after FAQ.

---

# 🧾 FORMS

## Registration

POST → /api/register  
Append to Airtable table “Programme Registrations”  
Redirect → /thank-you-registration

## Brochure

POST → /api/brochure  
Append to Airtable table “Brochure Downloads”  
Auto-download correct PDF (DPS or SOi)  
Redirect → /thank-you-brochure

School selection is mandatory.

---

# 🔐 BACKEND

Create:

/api/register  
/api/brochure

Must:
- Validate inputs
- Sanitize inputs
- Use environment variables
- Never expose Airtable key client-side

---

# ⚡ PERFORMANCE

- Mobile-first
- LCP < 1.5s
- Optimized images
- Lazy-loaded video
- Minimal JS
- Clean component structure

---

# 📊 TRACKING

Track:
- programme_registration
- brochure_download
- brochure_to_registration_conversion
- CTA_click

---

# 🎯 SUCCESS CRITERIA

Page must:

- Feel institutional
- Feel premium
- Feel structured
- Guide user intentionally
- Remove confusion
- Build trust progressively
- Convert significantly above brochure-style layout

Primary KPI:
Programme Registrations

---

This document serves as the complete design, conversion, and technical build specification for the Japan 2026 landing page.