# Design Specification: Editorial Scrapbook Identity

A living design specification for the personal portfolio of Akmal Fadhlul Rohman. Based on the approved editorial scrapbook art direction, tactile paper textures, and responsive composition rules.

---

## 1. Design Vision & Visual Identity

The portfolio uses an **Editorial Scrapbook & Collage** identity:
- **Tactile Paper Texture:** Warm, unbleached cream paper backgrounds layered with torn edges, physical washi tape, and hand-drawn doodles.
- **Bold Editorial Typography:** Heavy, condensed display headlines paired with technical monospaced details and warm handwritten notes.
- **Physical Collage Composition:** High-contrast photographic cutouts layered over torn cyan/blue Jakarta backings, sticky notes, and Polaroid frames.
- **Organic Asymmetry:** Deliberate slight rotations (-2deg to 4deg), overlapping paper cutouts, and hand-crafted accents that feel alive and grounded.

---

## 2. Color Palette & Design Tokens

| Token | Hex / Value | Purpose |
| :--- | :--- | :--- |
| `--paper` | `#FAF5EB` | Primary canvas (warm vintage sketchbook paper) |
| `--paper-dark` | `#F0E8D7` | Secondary paper layer, subtle section contrast |
| `--ink` | `#161615` | Deep charcoal ink for headlines and primary text |
| `--muted` | `#6A665E` | Secondary metadata, academic labels, captions |
| `--accent-cyan` | `#00A3FF` | Jakarta collage backing, blue marker strokes, active nav indicator |
| `--accent-pink` | `#FF6584` | Pink washi tape, sticky notes, highlight badges |
| `--accent-yellow` | `#E2F952` | UNTAR student tag, neon highlighter accents |
| `--accent-green` | `#B4F8C8` | Mint green washi tape strips |
| `--tape` | `rgba(255, 255, 255, 0.75)` | Translucent masking tape strips |
| `--border-ink` | `#161615` | Solid 1.5px–2px ink borders on tags and polaroids |

---

## 3. Typography Hierarchy

- **Display & Section Titles:** `Anton`, `Impact`, sans-serif
  - All-caps, tightly tracked, compressed line-height (0.92–1.05).
  - Used for hero headline (`AKMAL FADHLUL ROHMAN`), section numbers (`01. ABOUT ME`), and project titles.
- **Handwritten Annotations & Doodles:** `Caveat`, `Reenie Beanie`, cursive
  - Casual notes, arrows, polaroid captions, and scrapbook scribbles.
  - Sized 14px–22px, rotated slightly for organic feel.
- **Body & Editorial Paragraphs:** `Space Grotesk`, sans-serif
  - Clean, legible geometric rhythm.
  - Font size: `14px–16px` on desktop, `12.5px–14px` on mobile; line-height: `1.55–1.65`.
- **Metadata & Technical Tags:** `JetBrains Mono`, `Consolas`, monospace
  - SINTA 3 accreditation badge, DOI strings, category tags, skill pills.
  - Sized 11px–12.5px with letter-spacing `0.02em–0.04em`.

---

## 4. Responsive Layout Principles

### Desktop & Ultrawide (1024px to 2560px+)
- **Two-Column Split Composition:** 50/50 horizontal balance.
  - Left column: Massive typographic lockup, yellow highlighter tag, introduction, and CTA buttons.
  - Right column: Tall portrait cutout layered over blue torn Jakarta skyscraper background with floating crown, paper airplane, and star doodles.
- **Max Content Container:** Sized at `1280px` (`var(--max-width)`), centered with `margin: 0 auto` to prevent stretching on ultrawide monitors.

### Tablet (769px to 1024px)
- **Proportional Two-Column Grid:** Maintains genuine editorial split layout.
- Fluid typography using `clamp(48px, 6vw, 68px)` so headline words never wrap awkwardly.
- Scaled collage: Portrait height scales proportionally (`clamp(360px, 46vw, 440px)`).

### Mobile & Foldables (320px to 768px)
- **Intentional Hybrid Composition:**
  - **Row 1 (Side-by-side):** Headline and portrait cutout are visually connected above the fold (53% / 47% grid). The user immediately sees Akmal's name and portrait collage together.
  - **Row 2 (Full-width):** Bio summary paragraph stretches comfortably across full container width (`font-size: clamp(12px, 3.2vw, 14px); line-height: 1.6`) avoiding narrow column cramping.
  - **Row 3 (Full-width):** CTA buttons (`VIEW MY WORK`) and pink sticky note (`KEEP LEARNING KEEP BUILDING`) wrap naturally with touch-friendly spacing.
- **Zero Horizontal Scroll Leak:** All containers use `box-sizing: border-box`, `max-width: 100%`, and overflow protection.

---

## 5. Physical Scrapbook Details

- **Torn Paper Edges:** Separating major sections (Hero, About, Skills, Projects, Publication, Certificates, Contact) using custom SVG jagged edges.
- **Polaroid Frames:** White card with 8px–12px border, 24px bottom caption area, and semi-transparent washi tape pinned at the top.
- **Sticky Notes:** Pastel yellow and pink paper rectangles with subtle shadow (`0 4px 12px rgba(0,0,0,0.08)`) and slight tilt.
- **Hand-drawn Doodles:** SVG crowns, stars, arrows, smiles, and underline strokes layered with `pointer-events: none` so they never block user clicks.

---

## 6. Mobile Navigation & Touch UX

- **Header Compactness:**
  - On screens `<=768px`, the oversized `LET'S TALK` button is hidden from the top bar to prevent collisions with the logo and search button.
  - Search trigger (`⌘K`) and hamburger button (`☰`) remain accessible with minimum 44px touch targets.
- **Drawer Menu:**
  - Clicking the hamburger opens a full scrapbook slide-down drawer with large nav links and a dedicated `LET'S TALK ↗` button.
  - Tapping any link smoothly scrolls to the anchor and closes the menu automatically.
- **Scroll Anchor Offset:**
  - All sections have `scroll-margin-top: 76px` to prevent section headers from hiding underneath the sticky navbar.

---

## 7. Motion & Interaction

- **Restrained Motion:** GSAP-driven micro-interactions:
  - Subtle Polaroid lift on hover (`transform: translateY(-4px) rotate(1deg)`).
  - Magnetic CTA button hover effect on desktop with responsive tap state on mobile.
  - Hand-drawn active section indicator that smoothly slides between navigation links.
- **Accessibility & Reduced Motion:**
  - `@media (prefers-reduced-motion: reduce)` disables GSAP parallax and transitions for users with vestibular sensitivities.
