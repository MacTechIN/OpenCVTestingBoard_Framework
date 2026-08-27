## 2024-05-24 - Accessibility improvements for absolute overlay buttons and hidden inputs
**Learning:**
- Absolute positioned overlay buttons (like a remove icon on top of an image container) can have their focus rings clipped if the parent container uses `overflow-hidden`. Using `shadow-lg` on the button combined with `focus-visible:ring-2 focus-visible:ring-offset-2` helps ensure the focus indicator is always clearly visible and not clipped.
- The color of the focus ring should match the action intent (e.g. `focus-visible:ring-red-500` for destructive actions).
- File inputs that are hidden using Tailwind's `hidden` class (which maps to `display: none`) are technically removed from the accessibility tree, but adding `tabIndex={-1}` and `aria-hidden="true"` is a good defensive practice.
**Action:** Always apply explicit focus rings (`ring-2`, `ring-offset-2`) that color-match the button's action intent, especially for absolute positioned buttons, and explicitly remove hidden file inputs from accessibility flows.
