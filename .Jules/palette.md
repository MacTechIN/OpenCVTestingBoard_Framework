## 2024-06-04 - Keyboard Accessibility for Absolute Positioned Elements
**Learning:** For absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers, the default focus ring can be clipped or hard to see against varied image backgrounds.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping and to ensure focus visibility against varied backgrounds.
