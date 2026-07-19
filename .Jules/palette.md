
## 2024-07-19 - Improved keyboard accessibility for ImageUploader

**Learning:** When file inputs are hidden visually, their functionality should still be exposed via accessible trigger buttons. Furthermore, decorative SVG icons in buttons without text need both an explicit `aria-label` on the parent button and `aria-hidden="true"` on the SVG icon itself to prevent screen readers from reading meaningless structural elements. Lastly, absolutely positioned interactive elements often get their default focus rings clipped by an `overflow-hidden` container; custom focus rings (e.g., using `focus-visible:ring-2 focus-visible:ring-offset-2`) prevent clipping and clearly indicate focus.
**Action:** Always ensure hidden input functionality is mapped to keyboard-accessible buttons, decorate interactive image overlays with visible focus rings that contrast correctly (e.g., ring-red-500 for deletion), and strictly follow standard `aria-label` and `aria-hidden` patterns for icon-only buttons.
