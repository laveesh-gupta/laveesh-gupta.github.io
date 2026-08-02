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
- Dark/light theme toggle (top-right)
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

### 3. Experience (`#experience`)

**Files:** `Experience.jsx`, `Experience.css`

Work history and skills, two-column layout.

- Left column: glass card with comet border — timeline of 3 roles (IDFC FIRST Bank, Unisys, Samsung SRIB)
- Right column: interactive mind map — central "Toolbox" orb connected to 3 skill clusters (Backend & Dev, Frontend, Tools & Core) via animated flowing SVG lines
- Skill clusters float with a gentle Y-axis animation, paused on hover
- Responsive: stacks to single column below 980px, mind map moves above timeline on mobile
- `@property --gradient-angle` shared with About (both use same CSS custom property name — watch for conflicts if ever in the same stylesheet)

**Skill clusters:**

- Backend & Dev: Node.js, Docker, MongoDB, REST APIs, Microservices, GoCD
- Frontend: React, Next.js, Tailwind CSS, JavaScript, CSS3, HTML
- Tools & Core: Git, Figma, Web Security, Accessibility, Vite, Redux

---

### 4. Projects (`#projects`)

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

### 5. Contact (`#contact`)

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

| Pattern                      | Details                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Glass card                   | `backdrop-filter: blur(24px) saturate(160%)`, border, inset highlight shadow                                             |
| Comet border                 | `::after` with `conic-gradient` + `@property` angle — Hero, About, Experience. **Not on** Projects cards or Contact card |
| Static border                | `::before` linear-gradient highlight on all glass cards                                                                  |
| Entrance animation           | `IntersectionObserver` → adds `--in` class → CSS transition (Hero, About)                                                |
| Theme switching              | `data-theme="light"` on `<html>`, CSS vars swap per section                                                              |
| Scroll restoration           | `window.history.scrollRestoration = "manual"` in App                                                                     |
| Reduced motion               | `@media (prefers-reduced-motion: reduce)` disables all animations across all files                                       |
| `@property --gradient-angle` | Declared in About.css and Experience.css separately — same name, works because they're scoped but worth noting           |
