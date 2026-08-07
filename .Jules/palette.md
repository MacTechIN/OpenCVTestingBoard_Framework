## 2024-05-18 - Absolute Positioned Overlay Buttons Focus Rings
**Learning:** Absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers can have their focus rings clipped if not careful.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping. Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
