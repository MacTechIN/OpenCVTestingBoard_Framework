## 2024-05-28 - Absolute positioned button focus rings
**Learning:** For absolute positioned overlay buttons (e.g., clear buttons over images) within `overflow-hidden` containers, standard focus rings might get clipped.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2` combined with `shadow-lg` to prevent the focus ring from clipping and to ensure focus visibility against varied backgrounds.
