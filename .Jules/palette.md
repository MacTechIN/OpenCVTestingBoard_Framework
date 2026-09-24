## 2024-05-24 - Focus Ring Clipping on Overlay Buttons
**Learning:** Absolute positioned overlay buttons inside `overflow-hidden` containers clip standard focus rings, making keyboard navigation states invisible.
**Action:** Always combine `focus-visible:ring-offset-2` with `focus-visible:ring-2` on overlay buttons to ensure the focus indicator remains visible inside the container bounds.
