## 2026-07-02 - Added Focus State and ARIA label to Image Uploader Remove Button
**Learning:** For absolute positioned overlay buttons (like the X to remove an image) within `overflow-hidden` containers, standard focus rings can be clipped.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping and ensure it's visible. Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
