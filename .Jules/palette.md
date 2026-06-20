## 2025-02-20 - Focus Ring Clipping on Absolute Elements
**Learning:** Absolutely positioned elements (like the close 'X' button on the image uploader) within `overflow-hidden` containers can have their focus rings clipped if standard focus states are used.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping, and adapt the ring color to the action intent (e.g., `focus-visible:ring-red-500` for destructive actions like removing images).
