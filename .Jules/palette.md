## 2025-02-26 - Absolute Positioned Overlay Buttons Visibility
**Learning:** For absolute positioned overlay buttons (like remove image 'X' buttons over an uploaded image) that reside within an `overflow-hidden` container, default focus rings might get clipped.
**Action:** Use Tailwind classes `focus-visible:ring-offset-2` alongside the focus ring styling and `shadow-lg` to prevent clipping and improve visibility. Combine it with appropriate contextual coloring (e.g. `focus-visible:ring-red-500` for destructive actions like removing).
