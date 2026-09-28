# Portfolio Website — Context

## Overview

A personal portfolio website for **Laveesh Gupta**, a Frontend Developer based in India. Built with **React**, styled with custom CSS using an **Apple-style glassmorphism** design system. Supports dark and light themes.

---

## Design System

- **Style:** Glassmorphism — frosted glass cards, backdrop blur, soft borders
- **Font:** `-apple-system, BlinkMacSystemFont, "SF Pro Display", Segoe UI, Roboto`
- **Theme:** Dark (default) + Light toggle
- **Accent (dark):** `#8ab4ff`
- **Accent (light):** `#2f6fed`
- **Comet border:** Animated `conic-gradient` orbiting border on glass cards
- **Motion:** Staggered entrance animations, reduced-motion respected throughout

---

## Sections

### 1. Hero (`#hero`)

**Files:** `Hero.jsx`, `Hero.css`

The landing section. Full viewport height.

- Animated blob mascot that peeks up with speech bubbles
- Typewriter role cycling: `Frontend Developer`, `React Developer`, `UI Engineer`, `Creative Coder`
- Glass card with 3D tilt on mouse move and comet border
- Staggered entrance animations on child elements
- Dark/light theme toggle (top-right) — inline component via ThemeSwitcher()
- Scroll-down arrow that hides on scroll
- CTA buttons: **View Projects** → `#projects`, **Get in Touch** → `#contact`

---

### 2. About (`#about`)

**Files:** `About.jsx`, `About.css`

Personal introduction section.

- Glass card with comet border and scroll-triggered entrance
- Stat counters: `4+ Years Experience`, `5+ Projects Shipped`
- Live status ticker (cycles every 3s): current activity, location, mood
- Emoji reaction buttons (😎 ❤️ 🔥 🚀) that launch floating particles full-screen
- Expandable fun facts toggle

---

### 3. Toolbox (`#toolbox`)

**Files:** `Toolbox.jsx`, `Toolbox.css`

Skills showcase — **separate section** (not part of Experience). Three-column layout.

- Icon-based category cards with pill-shaped skill tags
- Categories: Backend & Dev, Frontend, Tools & Core
- Each category card has its own staggered entrance animation

**Skill categories:**

- **Backend & Dev:** Node.js, Docker, MongoDB, REST APIs, Microservices, GoCD
- **Frontend:** React, Next.js, Tailwind CSS, JavaScript, CSS3, HTML
- **Tools & Core:** Git, Figma, Web Security, Accessibility, Vite, Redux

---

### 4. Experience (`#experience`)

**Files:** `Experience.jsx`, `Experience.css`

Work history and overview stats, two-column layout.

- **Left column:** Stat cards showing `4+ Years Active`, `3 Roles Held`, `3 Companies`
- **Right column:** Vertical timeline with 3 roles (IDFC FIRST Bank, Unisys, Samsung SRIB)
- Each entry shows role, company, period, and description
- Simple animated dots along the vertical timeline line

**Timeline entries:**

1. **Developer @ IDFC FIRST Bank** (2022 – Present) - React SPA development
2. **Tech Intern @ Unisys** (2021) - Legacy system modernization
3. **ML Research Intern @ Samsung SRIB** (2020) - Recommendation models

---

### 5. Projects (`#projects`)

**Files:** `Projects.jsx`, `Projects.css`

Showcase of shipped work. Linked from Hero CTA: **View Projects**

- Centered header with eyebrow, title, subtitle
- 2-column card grid (stacks to 1 column below 720px)
- Each card: title, description, tech tags, "View Project →" link
- Cards have lift-on-hover (`translateY(-6px)`) and static `::before` gradient border (no comet spin)
- No entrance animation currently

**Projects:**

- **MedScan** — Hyperledger Fabric blockchain drug supply chain. Tags: React, Node.js, Blockchain
- **EdgeVision** — Edge-computing facial recognition with TensorFlow.js and Flask. Tags: React, Python, TensorFlow.js, Flask

---

### 6. Contact (`#contact`)

**Files:** `Contact.jsx`, `Contact.css`

Get in touch section. Linked from Hero CTA: **Get in Touch**

- Centered glass card (max-width 700px), no comet border (static `::before` only)
- Three horizontal link cards (stack vertically below 560px): Email, GitHub, LinkedIn
- Each card: circular icon button + label + value
- Hover: background lightens, border shifts to accent color, slight lift

**Links:**

- Email: `gupta.laveesh@gmail.com`
- GitHub: `github.com/laveesh-gupta`
- LinkedIn: `linkedin.com/in/laveesh-gupta`

---

## Shared Patterns

| Pattern            | Details                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Glass card         | `backdrop-filter: blur(24px) saturate(160%)`, border, inset highlight shadow                                             |
| Comet border       | `::after` with `conic-gradient` + `@property` angle — Hero, About, Experience. **Not on** Projects cards or Contact card |
| Static border      | `::before` linear-gradient highlight on all glass cards                                                                  |
| Entrance animation | `IntersectionObserver` → adds `--in` class → CSS transition (Hero, About)                                                |
| Theme switching    | `data-theme="light"` on `<html>`, CSS vars swap per section                                                              |
| Scroll restoration | `window.history.scrollRestoration = "manual"` in App                                                                     |
| Reduced motion     | `@media (prefers-reduced-motion: reduce)` disables all animations across all files                                       |
| Background blobs   | Fixed-position animated gradient orbs (`.blob-container`) — decorative, no interaction                                   |

---

## Additional Notes

- **App.jsx:** Contains global styles and splash screen animation that fades out on load
- **ThemeToggle.jsx:** Exists but not currently used (theme switching is handled inline in Hero.jsx via ThemeSwitcher)
- **@property --gradient-angle:** Used for comet border animations — declared separately in About.css and Experience.css
- **Toolbox** was previously described as part of Experience's mind map, but it's actually a separate section with its own layout

---

## File Structure Summary

```
src/
├── components/
│   ├── Hero.jsx/css      # Landing section with animated mascot
│   ├── About.jsx/css     # Personal intro + stats + reactions
│   ├── Toolbox.jsx/css   # Skills showcase (separate from Experience)
│   ├── Experience.jsx/css# Work timeline + overview stats
│   ├── Projects.jsx/css  # Portfolio projects grid
│   └── Contact.jsx/css   # Contact links section
├── App.jsx               # Main app with splash screen animation
├── App.css               # Global styles + animated background blobs
└── index.css             # Root stylesheet
```
