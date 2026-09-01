## 2024-09-01 - Focus Rings on Absolute Overlay Elements
**Learning:** For absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers, the default focus ring might get clipped or be hard to see against unpredictable image backgrounds.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent clipping and ensure visibility. Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions like removing an image).
