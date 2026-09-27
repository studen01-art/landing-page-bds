# Project Specification — Vinhomes Grand Park Landing Page

## Project
Static real-estate landing page for **Vinhomes Grand Park — Thành phố Thủ Đức**.

## Deliverable
The project must render as a standalone static website.

### Required main file
`index.html`

The implementation may use:
- HTML
- CSS
- Vanilla JavaScript
- Bootstrap CDN

It must not require a backend.

---

## 1. Visual Identity

### Colors
| Purpose | Color |
|---|---|
| Main background | `#f2f2f2` |
| Primary text | `#2d2d86` |
| Supporting text | Dark neutral gray |
| Cards | White |
| CTA | A strong accent compatible with the Vinhomes/premium real-estate aesthetic |

### Style
- Premium
- Modern
- Elegant
- Minimal but visually attractive
- Spacious layout
- Rounded corners
- Subtle shadows
- Strong typography hierarchy

---

## 2. Header / Navbar

Create a responsive Bootstrap navbar.

Requirements:
- Brand/logo text: **Vinhomes**
- Navigation should be simple and easy to understand.
- Suggested links:
  - Trang chủ
  - Tiện ích
  - Chính sách
  - Liên hệ
- Navbar collapses on smaller screens.
- Keep the header visually clean.

---

## 3. Hero Section

The hero should immediately communicate the value of the project.

### Required content
- Attention-grabbing headline.
- Short description about Vinhomes Grand Park.
- One clear CTA button.
- Large real-estate / resort-villa image.
- Image positioned on the **right side on desktop**.
- Text positioned on the **left side on desktop**.

### Suggested CTA
`Nhận thông tin dự án`

The CTA may scroll to the contact section or open a simple contact interaction implemented with vanilla JavaScript.

---

## 4. Features Section

Create exactly 3 feature cards.

### Feature 1
**Lối sống thượng lưu**

Explain the premium lifestyle and residential environment.

Use a unique image.

### Feature 2
**Tiện ích tối ưu**

Explain the convenience and ecosystem of amenities.

Use a different image.

### Feature 3
**Pháp lý nhanh gọn**

Explain the streamlined/legal-information-oriented selling proposition without making unsupported legal guarantees.

Use a third, different image.

### Card requirements
- Image
- Title
- Short description
- Consistent card dimensions
- Responsive 3-column desktop layout
- Stack on mobile

---

## 5. Footer

Include:
- Vinhomes branding
- Copyright
- Contact phone/email placeholders
- Optional simple contact information

Example:
- Hotline: 09xx xxx xxx
- Email: contact@example.com

Use placeholders rather than inventing an official phone number.

---

## 6. Responsive Behavior

### Desktop
- Two-column hero
- Three-column feature cards
- Comfortable horizontal spacing

### Tablet
- Hero remains balanced
- Feature cards may use 2 columns if needed

### Mobile
- Single-column hero
- Image below or above text naturally
- One-column feature cards
- Collapsed navbar

---

## 7. JavaScript

Use JavaScript only where useful.

Possible behavior:
- Smooth scrolling for navbar/CTA links.
- Mobile interaction if necessary.
- Simple CTA/contact interaction.

Do not build a backend form.
If a form is added, it should be a frontend-only demonstration.

---

## 8. Technical Acceptance Criteria

- Valid semantic HTML5 structure.
- Bootstrap included through CDN.
- No backend.
- No build system required.
- `index.html` can be opened directly in a browser.
- Images have meaningful `alt` attributes.
- No console errors caused by the implementation.
- No broken layout at common viewport sizes.
