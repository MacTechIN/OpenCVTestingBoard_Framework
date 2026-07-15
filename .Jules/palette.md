## 2026-07-15 - Absolute Positioned Icon Buttons Focus Clipping
**Learning:** Icon-only buttons positioned absolutely over images within `overflow-hidden` containers often have their native focus rings clipped or hidden, making keyboard navigation inaccessible.
**Action:** Always add `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to such buttons. Ensure the ring color matches the action intent (e.g., `focus-visible:ring-red-500` for delete).
