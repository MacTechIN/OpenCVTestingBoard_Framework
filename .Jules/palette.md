## 2024-05-18 - [a11y] Improve keyboard accessibility and screen reader support for image uploader
**Learning:** For absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers, standard focus rings can clip. Added `tabIndex={-1}` and `aria-hidden="true"` to hidden file inputs for defense.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent focus ring clipping. Use `focus-visible:ring-red-500` for destructive actions. Apply these defensively on interactive elements.
