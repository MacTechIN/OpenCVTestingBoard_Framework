## 2024-08-17 - Absolute Positioned Overlay Buttons Focus Rings
**Learning:** When placing absolute positioned buttons over content (like images) within `overflow-hidden` containers, the default or basic focus rings can get clipped by the container bounds, breaking keyboard accessibility visual cues.
**Action:** Use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to ensure the focus ring remains fully visible and doesn't clip, adapting the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
