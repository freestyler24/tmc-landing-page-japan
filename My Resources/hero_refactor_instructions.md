
# Hero Section Refactor Guide — Japan 2026 Landing Page

## Objective
Refactor the hero section layout to match the Firefly reference design while preserving the existing branding system, typography tokens, and content. Only adjust layout, spacing, alignment, and image prominence.

---

# Branding Tokens (Do Not Change)

## Colors
--color-primary-red: #D21F2B  
--color-deep-indigo: #1B2230  
--color-rice-white: #F6F1E8  
--color-sakura: #F2C9CF  
--color-fuji-blue: #6A86A8  
--color-kyoto-gold: #BFA05A  
--color-text-primary: #2C3443  
--color-text-secondary: #8A9099  
--color-border-soft: #E3DED4  

## Typography
Headings: Noto Serif JP  
Body: Inter  

Scale:
H1: 56px  
H2: 40px  
H3: 26px  
Body: 17px  
Small: 14px  

---

# Layout Structure

Use a **two‑column hero layout**.

Container max-width: 1280px  
Grid columns: 2  
Left column: 50–55%  
Right column: 45–50%  
Column gap: 64px  
Hero min-height: 80vh  
Align items: center

Left column content must be **center aligned horizontally** on desktop.

---

# Left Column Content Structure

Stack vertically and center align.

Order:

1. Logos
2. Meta line
3. Program duration
4. Headline
5. Description
6. Feature cards
7. Countdown
8. CTA

Max width: 520px  
margin: auto  
text-align: center  

Spacing:

logos → meta: 24px  
meta → duration: 16px  
duration → headline: 10px  
headline → description: 20px  
description → cards: 32px  
cards → countdown: 32px  
countdown → CTA: 20px  

---

# Logos Row Improvement

Purpose: make logos a subtle trust signal instead of competing with headline.

Container styling:

display: flex  
justify-content: center  
align-items: center  
gap: 28px  
margin-bottom: 32px  
opacity: 0.8  

Logo size:

height: 36px  
width: auto  
object-fit: contain  

Optional separators:

border-right: 1px solid var(--color-border-soft)  
padding-right: 20px  
margin-right: 20px  

---

# Meta Line Styling

Text:

October 2026 | Grades 6–12 | Limited to 45 Students

Style:

font-size: 14px  
letter-spacing: 0.08em  
text-transform: uppercase  

Badge styling:

background: var(--color-primary-red)  
color: white  
padding: 6px 12px  
border-radius: 6px  
font-size: 13px  
font-weight: 600  
letter-spacing: 0.04em  
box-shadow: 0 2px 6px rgba(0,0,0,0.08)  
margin-left: 12px  

Optional subtle pulse animation:

scale: 1 → 1.03 → 1  
duration: 6s  

---

# Headline Hierarchy

Structure:

09 Days. 04 Cities.  
Where Exposure  
Becomes Perspective.

Style:

font-family: Noto Serif JP  
font-size: 56px  
line-height: 1.05  
max-width: 520px  
color: var(--color-text-primary)

Reduce spacing between duration and headline:

margin-bottom: 8px

---

# Description Text

font-family: Inter  
font-size: 17px  
line-height: 1.6  
color: var(--color-text-secondary)  
max-width: 520px

---

# Feature Cards

Use 2x2 grid.

grid-template-columns: repeat(2, 1fr)  
gap: 16px  

Card styling:

padding: 20px  
border: 1px solid var(--color-border-soft)  
border-radius: 10px  
background: white  
box-shadow: subtle elevation

Icons aligned right.

---

# Countdown + CTA Decision Block

Group the countdown and CTA into one section.

Structure:

PARENT ORIENTATION REGISTRATION CLOSES IN

82 : 05 : 32 : 28

[ ATTEND PARENT ORIENTATION ]

Spacing:

label → numbers: 8px  
numbers → CTA: 16px

Divider above block:

margin-top: 28px  
padding-top: 24px  
border-top: 1px solid var(--color-border-soft)

Countdown typography:

font-size: 40px  
font-weight: 600  
letter-spacing: 0.08em  
color: var(--color-text-primary)

Labels:

font-size: 11px  
text-transform: uppercase  
color: var(--color-text-secondary)

CTA styling:

text: Attend Parent Orientation (DO NOT CHANGE TEXT)

background: var(--color-primary-red)  
color: white  
padding: 14px 32px  
border-radius: 8px  
font-family: Inter  
font-weight: 600  
min-width: 280px

---

# Right Column Image

Poster should be visually dominant.

width: 100%  
max-width: 640px  
aspect-ratio: 1 / 1  
object-fit: contain  
margin: auto

Framing style:

border: 2px solid var(--color-kyoto-gold)  
border-radius: 12px  
box-shadow: 0 12px 40px rgba(0,0,0,0.12)  
background: var(--color-rice-white)  
padding: 8px

Image height alignment:

max-height: 90vh

---

# Program Title Overlay On Image

Text:

Japan 2026 Educational Immersion Program  
A Structured Journey into Discipline, Culture, and Independent Thinking

Overlay styling:

position: absolute  
top: 24px  
left: 50%  
transform: translateX(-50%)  

background: rgba(255,255,255,0.8)  
backdrop-blur: 4px  
padding: 12px 18px  
border-radius: 8px  
text-align: center

Title:

font-family: Noto Serif JP  
font-size: 24px  
color: var(--color-deep-indigo)

Subtitle:

font-family: Inter  
font-size: 14px  
color: var(--color-text-secondary)

---

# Subtle Background Accent (Premium Touch)

Add a radial background glow behind the poster image.

.hero-bg-accent

position: absolute  
right: -120px  
top: 50%  
transform: translateY(-50%)  
width: 620px  
height: 620px  

background: radial-gradient(  
circle,  
rgba(210,31,43,0.08) 0%,  
rgba(210,31,43,0.03) 40%,  
rgba(210,31,43,0) 70%  
)

pointer-events: none

Layer order:

hero container  
background accent  
left content  
poster image

Disable accent on mobile.

@media (max-width:768px)  
display: none

---

# Responsive Behavior

Tablet:

grid → single column  
image below description  
cards remain two columns

Mobile order:

logos  
meta  
headline  
description  
image  
cards  
countdown  
CTA

Limit image height on mobile:

max-height: 420px  
margin-top: 24px

---

# Final Hero Hierarchy

Logos  
Meta line + badge  
09 Days. 04 Cities  
Where Exposure Becomes Perspective  
Description  
Feature cards  
Decision block (countdown + CTA)

Right side:

Poster image  
Program title overlay  
Subtle radial glow

---

# Important Constraints

Do NOT change:

• CTA text  
• Fonts  
• Color palette  
• Hero copy  

Only improve layout, spacing, alignment, and image prominence.
