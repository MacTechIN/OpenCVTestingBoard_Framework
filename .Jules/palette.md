## 2024-08-15 - Focus Visibility on Overlay Buttons
**Learning:** Absolute positioned overlay buttons over images within `overflow-hidden` containers clip focus rings unless offset and properly stacked.
**Action:** Always use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with appropriate `shadow-lg` to prevent the focus ring from clipping and adapt the ring color to the action intent (e.g. destructive).
