## 2026-09-22 - Prevent Focus Ring Clipping on Overlay Buttons
**Learning:** Absolute positioned overlay buttons within `overflow-hidden` containers often have their keyboard focus rings clipped, making them inaccessible for keyboard navigation.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` and adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500`). Ensure icon-only buttons have `aria-label` and `aria-hidden="true"` on the SVG.
