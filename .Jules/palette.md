## 2024-05-24 - [Focus Ring Clipping on Absolute Overlay Buttons]
**Learning:** Absolute positioned buttons over images inside `overflow-hidden` containers often have their focus rings clipped, making them inaccessible to keyboard users.
**Action:** Use `shadow-lg` combined with `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` to prevent clipping. Also, adapt the ring color to match the action (e.g., `focus-visible:ring-red-500` for destructive actions like delete/remove).
