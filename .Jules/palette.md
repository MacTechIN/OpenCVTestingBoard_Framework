## 2024-06-29 - [Accessibility] Focus Rings on Absolute Positioned Overlay Buttons
**Learning:** Focus rings on absolute positioned overlay buttons (e.g., clear image buttons) placed inside `overflow-hidden` containers often get clipped, making them invisible or partially visible during keyboard navigation.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping, and adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
