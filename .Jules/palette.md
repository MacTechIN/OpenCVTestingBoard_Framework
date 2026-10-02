## 2026-10-02 - Accessible Overlay Buttons
**Learning:** For absolutely positioned overlay icon buttons (e.g., image removal buttons) over elements with hidden overflow, default focus rings may be clipped. Additionally, screen readers need explicit labels for icon-only buttons.
**Action:** Use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-red-500` combined with `shadow-lg` to prevent clipping. Add `aria-label` translated explicitly and hide inner icons with `aria-hidden="true"`.
