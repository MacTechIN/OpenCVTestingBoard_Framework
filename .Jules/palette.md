## 2026-05-20 - Focus-visible class application on absolute positioned buttons
**Learning:** When using absolute positioning for icon-only overlay buttons (like the ImageUploader clear button), default focus rings can be clipped by the parent container's `overflow-hidden`.
**Action:** Always ensure absolute positioned overlay buttons have sufficient padding and use `focus-visible:ring-offset-2` combined with `shadow-lg` to ensure the focus state remains highly visible against arbitrary uploaded image backgrounds.
