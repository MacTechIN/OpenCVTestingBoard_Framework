## 2024-05-15 - Initial Journal
**Learning:** Understanding the user's intent to find a simple UX win and implement it cleanly within the project constraints.
**Action:** Review `src` components for missing ARIA labels, loading states, accessibility improvements, empty states, tooltip usage, etc.

## 2024-10-11 - Absolute Positioned Overlay Button Focus Rings
**Learning:** When absolutely positioning interactive elements (like an icon-only "remove" button) inside `overflow-hidden` containers, standard focus rings might get clipped.
**Action:** Use Tailwind classes `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2` (adapting color to intent, e.g., `focus-visible:ring-red-500` for destructive actions) combined with `shadow-lg` to prevent the focus ring from clipping and ensure clear visibility. Also, always add an explicit `aria-label` utilizing translation and `aria-hidden="true"` to the internal icon element.
