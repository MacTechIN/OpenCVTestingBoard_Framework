## 2026-08-20 - Focus Rings on Absolute Positioned Elements
**Learning:** Absolutely positioned overlay buttons (e.g., over images) within `overflow-hidden` containers require specific ring colors (`focus-visible:ring-red-500` or `focus-visible:ring-blue-500`) combined with `shadow-lg` to prevent the focus ring from clipping and ensure it is clearly visible.
**Action:** Always verify `focus-visible` styling on absolutely positioned interactive elements inside containers with `overflow-hidden` to ensure keyboard accessibility.
