## 2024-06-22 - Visually Hidden File Inputs and Overlay Button Focus

**Learning:** When using `className="hidden"` on file inputs (or other interactive elements) to visually hide them and trigger them via another visible button, they must be explicitly excluded from keyboard navigation and screen readers using `tabIndex={-1}` and `aria-hidden="true"`. Otherwise, they might still be focusable or announced inconsistently depending on the browser/screen reader combination. Also, for absolute positioned overlay buttons (e.g., a "remove" button over an image) within `overflow-hidden` containers, standard focus rings can get clipped.

**Action:**
1. Always add `tabIndex={-1}` and `aria-hidden="true"` to `<input type="file" className="hidden" />`.
2. For absolute positioned overlay buttons inside `overflow-hidden` containers, use Tailwind's `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping, and adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions like removing an image).