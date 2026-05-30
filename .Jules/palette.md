## 2024-05-30 - Accessible absolute buttons in containers
**Learning:** For absolute positioned overlay buttons (e.g., a "clear" button over an image) within `overflow-hidden` containers, standard focus rings can be clipped or hard to see against varied backgrounds.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2` combined with `shadow-lg` to prevent the focus ring from clipping and to ensure focus visibility against any background. Also, always add `aria-hidden="true"` to pure decorative icons inside icon-only buttons to reduce screen reader noise.
