## 2025-02-28 - Focus Ring Clipping for Overlay Buttons

**Learning:** Absolute positioned overlay buttons (e.g., 'Remove Image' button) inside containers with `overflow-hidden` can have their keyboard focus rings clipped, making the focus state invisible to keyboard users. Using `focus-visible:ring-offset-2` alongside `focus-visible:ring-2` can push the ring outwards, preventing clipping while keeping the ring visible against diverse image backgrounds.

**Action:** When adding absolute positioned overlay buttons, ensure to apply `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` with an appropriate ring color to guarantee keyboard accessibility and visibility.