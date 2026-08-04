
## 2023-10-25 - Focus-visible with Shadow on Overlay Buttons
**Learning:** When using absolute positioned overlay buttons (e.g., a remove "X" button over an uploaded image) within `overflow-hidden` containers, standard focus rings can be clipped by the container boundaries, leading to poor keyboard accessibility visibility.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping and ensure it's clearly visible. Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
