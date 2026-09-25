## 2024-03-24 - Absolute Positioned Buttons Focus Ring Clipping
**Learning:** Focus rings on absolutely positioned overlay buttons (e.g., a "Remove image" button inside an image container) can be clipped if the parent container uses `overflow-hidden`.
**Action:** Use a combination of `shadow-lg` and offset focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`) adapted to the action's intent (e.g., `ring-red-500` for destructive actions) to ensure the focus indicator is fully visible and not clipped by the parent container's boundaries.
