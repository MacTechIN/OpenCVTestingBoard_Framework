## 2024-05-24 - [Focus State Visibility on Overlay Buttons]
**Learning:** Absolute positioned overlay buttons (e.g., over images in `overflow-hidden` containers) often lose their keyboard focus rings due to clipping, making it impossible to see where focus currently lies.
**Action:** Always apply `focus-visible` ring with `ring-offset` (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`) and `shadow-lg` to prevent focus rings from clipping. Adapt ring color to action intent (e.g., `focus-visible:ring-red-500` for destructive actions).
