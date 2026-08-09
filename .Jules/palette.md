## 2024-05-15 - [Absolute Buttons in Overflow Hidden]
**Learning:** For absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers, standard focus rings can get clipped, degrading accessibility.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping and ensure it's visible. Adapt the ring color to the action's intent.
