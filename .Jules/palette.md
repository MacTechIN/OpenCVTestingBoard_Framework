## 2024-06-24 - Hidden File Input and Overlay Button Focus

**Learning:**
- Hidden file inputs (`className="hidden"`) can still receive keyboard focus if they don't explicitly have `tabIndex={-1}` and `aria-hidden="true"`, causing a confusing focus state for screen reader and keyboard users.
- Absolute positioned icon-only buttons overlaying images within `overflow-hidden` containers lose their default focus rings due to clipping.

**Action:**
- Always explicitly add `tabIndex={-1}` and `aria-hidden="true"` to visually hidden file inputs to ensure they are excluded from keyboard navigation and screen readers.
- For overlay buttons, use Tailwind focus utility classes (e.g., `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`) combined with `shadow-lg` to prevent the focus ring from clipping and ensure visibility. Ensure the ring color matches the action context (e.g., `ring-red-500` for destructive, `ring-blue-500` for standard actions).
- Always ensure icon-only buttons have an explicit `aria-label` and `aria-hidden="true"` on the internal SVG/icon component.