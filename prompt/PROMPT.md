# Antigravity Execution Prompt

Build the landing page described in `PROJECT_SPEC.md`.

## Task

Create a simple but polished real-estate landing page for:

**Vinhomes Grand Park — Thành phố Thủ Đức**

The final website must be a static frontend only.

## Required Files

At minimum, create:

```text
index.html
```

You may create separate CSS/JS files if that makes the code cleaner, but the main source must remain `index.html`.

Use Bootstrap through CDN.

## Page Requirements

### Header / Navbar
- Brand: Vinhomes
- Simple navigation menu
- Responsive Bootstrap navbar

### Hero
Create a high-impact hero section with:
- Strong headline
- Short description
- One CTA button
- Real-estate / resort-villa image
- Text on the left and image on the right on desktop

Suggested headline direction:

> Sống chuẩn thượng lưu giữa tâm điểm phía Đông TP.HCM

Do not overuse exaggerated claims that cannot be verified.

Suggested CTA:

> Nhận thông tin dự án

### Features

Create exactly 3 feature cards:

1. **Lối sống thượng lưu**
2. **Tiện ích tối ưu**
3. **Pháp lý nhanh gọn**

Each card must have:
- A different image
- Title
- Concise description
- Premium visual treatment

For the legal feature, avoid claiming guaranteed legal outcomes unless supported by provided source material.

### Footer
Include:
- Vinhomes
- Copyright
- Contact information
- Use placeholders for phone/email if official contact details are not provided.

## Visual Requirements

Primary background:

```css
#f2f2f2
```

Primary text:

```css
#2d2d86
```

Use:
- White cards
- Soft shadows
- Rounded corners
- Modern typography
- Generous spacing
- Premium real-estate visual style

## Responsive Requirements

Desktop:
- Hero uses a two-column layout.
- Image is on the right.
- Features are displayed in 3 columns.

Mobile:
- Hero becomes one column.
- Image adapts to the viewport.
- Features stack vertically.
- Navbar collapses.

## Implementation Constraints

- HTML5 only for markup.
- CSS3 for styling.
- Vanilla JavaScript.
- Bootstrap via CDN.
- No backend.
- No database.
- No server-side language.
- No React/Vue/Angular unless explicitly requested later.
- Keep JavaScript minimal.
- Use semantic HTML and accessible labels/alt text.

## Final Verification

Before finishing:
1. Confirm `index.html` exists.
2. Confirm Bootstrap CDN is included.
3. Confirm the navbar is responsive.
4. Confirm the hero image is on the right on desktop.
5. Confirm exactly 3 feature cards exist.
6. Confirm all 3 feature images are different.
7. Confirm footer contains copyright and contact details.
8. Confirm the site works as a static HTML page.
9. Check for obvious responsive/layout issues.
10. Do not introduce backend code.

After implementation, briefly report which files were created and any assumptions made.
