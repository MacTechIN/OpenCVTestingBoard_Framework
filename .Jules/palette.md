## 2024-05-15 - [Focus Rings on Absolute Positioned Action Buttons]
**Learning:** For absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers, standard focus outlines may be clipped by the container or lack sufficient contrast against the image.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping and ensure contrast. Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
