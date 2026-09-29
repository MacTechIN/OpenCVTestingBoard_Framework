## 2024-05-24 - Accessibility improvements for absolute positioned overlay buttons
**Learning:** Absolute positioned overlay buttons within overflow-hidden containers can have their focus rings clipped if not styled carefully.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` and adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions) to ensure keyboard focus states are visible and accessible.
