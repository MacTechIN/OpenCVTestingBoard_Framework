## 2025-02-14 - Improve ImageUploader Accessibility
**Learning:** Absolute positioned overlay buttons over images (like the remove image button) need explicit `focus-visible` styles with offset to prevent clipping in `overflow-hidden` containers, and hidden file inputs need `tabIndex={-1}` and `aria-hidden="true"` to be fully ignored by screen readers and keyboard navigation.
**Action:** Always add `tabIndex={-1}` and `aria-hidden="true"` to `className="hidden"` inputs, and use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` on overlay buttons.
