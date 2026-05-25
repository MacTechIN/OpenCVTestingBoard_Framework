## 2026-05-25 - Accessibility of overlay buttons in overflow-hidden containers
**Learning:** For absolute positioned overlay buttons (e.g., remove image buttons) within `overflow-hidden` containers, standard focus rings can be clipped by the parent container or become invisible against the background image.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2` combined with `shadow-lg` to prevent the focus ring from clipping and to ensure focus visibility against varied backgrounds. Apply these to overlay buttons that require keyboard navigation.
