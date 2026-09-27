# AGENTS.md — Vinhomes Grand Park Landing Page

## Role
You are a frontend developer working on a simple static landing page for a real-estate advertising campaign.

## Primary Goal
Build a polished, responsive landing page promoting **Vinhomes Grand Park, Thành phố Thủ Đức**.

## Technology Constraints
- Use only:
  - HTML5
  - CSS3
  - Vanilla JavaScript
  - Bootstrap via CDN
- No backend.
- No PHP, Python, Node.js server, database, API server, or other backend technology.
- The main source file must be `index.html`.
- Prefer keeping the implementation simple and easy to edit.
- Bootstrap may be loaded from a CDN.
- JavaScript should be vanilla JS unless Bootstrap's JavaScript bundle is needed.

## Design Direction
- Overall background: `#f2f2f2`
- Main text color: `#2d2d86`
- Clean, premium, modern real-estate aesthetic.
- Use generous whitespace, rounded cards, subtle shadows, and strong visual hierarchy.
- Responsive on desktop, tablet, and mobile.
- Hero image must appear on the right on desktop and stack naturally on smaller screens.

## Content Structure
1. Header / Navbar
   - Vinhomes brand name/logo treatment.
   - Simple navigation links.
   - Responsive Bootstrap navbar.

2. Hero Section
   - Strong attention-grabbing headline.
   - Short supporting description.
   - One primary CTA button.
   - Real-estate / resort-villa visual on the right.

3. Features Section
   Present exactly 3 major benefits:
   - Lối sống thượng lưu
   - Tiện ích tối ưu
   - Pháp lý nhanh gọn
   Each feature needs a different illustrative image.

4. Footer
   - Copyright information.
   - Contact information.

## Image Guidelines
- Use suitable real-estate imagery.
- Do not embed huge local binary assets into source code.
- If using external images, use stable image URLs and meaningful `alt` text.
- Avoid broken-image layouts.
- Use `object-fit: cover` where appropriate.

## Accessibility
- Use semantic HTML.
- All meaningful images need `alt` text.
- Buttons and links must have clear labels.
- Maintain reasonable color contrast.
- Keyboard navigation should remain usable.

## Quality Requirements
- No unnecessary frameworks beyond Bootstrap CDN.
- No inline backend logic.
- Avoid excessive JavaScript.
- Avoid duplicated CSS.
- Use clear class names.
- Keep the page visually coherent and production-ready.

## Validation Checklist
Before considering the task complete:
- `index.html` exists and contains the complete page.
- Bootstrap loads from CDN.
- Navbar works responsively.
- Hero section contains headline, description, CTA, and right-side image on desktop.
- Exactly 3 feature cards are present.
- Each feature has a different image.
- Footer contains copyright and contact details.
- Layout works on mobile.
- No backend code is introduced.
