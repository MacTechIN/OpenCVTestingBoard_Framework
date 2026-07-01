## 2024-07-01 - Absolute Positioned Button Accessibility
**Learning:** Absolute positioned overlay buttons inside containers with `overflow-hidden` can have their keyboard focus rings clipped, making them invisible to keyboard users.
**Action:** Always add `focus-visible:ring-offset-2` (and optionally a base shadow) to `focus-visible:ring-2` on absolute positioned buttons to ensure the focus indicator renders clearly inside the element boundaries, and adapt the ring color to the action intent (e.g. destructive).
