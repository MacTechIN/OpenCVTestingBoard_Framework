## 2024-07-24 - Accessible Overlay Buttons
**Learning:** Absolute positioned overlay buttons inside `overflow-hidden` containers can clip default focus rings, making keyboard navigation difficult to track visually.
**Action:** Always combine `shadow-lg` with `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` and adapt the ring color to the action (e.g., `focus-visible:ring-red-500` for destructive actions like removing images).
