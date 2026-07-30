## Initializing palette.md
## 2024-03-24 - [Accessible Icon-Only Overlay Buttons]
**Learning:** Absolute positioned icon-only buttons overlaying images within `overflow-hidden` containers face accessibility and interaction issues. Focus rings can be clipped, and without proper ARIA labels, they are invisible to screen readers.
**Action:** Always add explicit `aria-label` utilizing the `t()` translation function, `aria-hidden="true"` on the internal icon element, and Tailwind `:focus-visible` classes for keyboard focus navigation. Use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent focus ring clipping. Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
