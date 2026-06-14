## 2024-03-20 - Focus Ring Clipping on Overlays
**Learning:** Absolute positioned interactive elements over images or within `overflow-hidden` containers often have their focus rings clipped, making keyboard navigation difficult to track.
**Action:** When styling absolute positioned overlay buttons, always combine `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` with `shadow-lg` and ensure the ring color matches the action intent (e.g., `focus-visible:ring-red-500` for delete).
