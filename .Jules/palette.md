## 2024-07-16 - Absolute Positioned Buttons & Focus Rings in Overflow-Hidden Containers
**Learning:** When using absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers, standard focus rings can be clipped if the element is near the edge.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping and adjust the ring color to match the action context (e.g., `focus-visible:ring-red-500` for destructive actions).
