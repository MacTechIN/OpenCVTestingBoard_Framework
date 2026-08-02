## 2025-08-02 - Absolute buttons over images within overflow-hidden containers
**Learning:** For absolute positioned buttons (like remove buttons over images) within an `overflow-hidden` container, simply adding a standard focus ring will result in the ring being clipped or invisible if it extends past the container's bounds.
**Action:** Use Tailwind's `focus-visible:ring-offset-2 focus-visible:outline-none` alongside the ring to ensure the focus state is clearly visible and offset from the button boundaries, preventing clipping and enhancing keyboard accessibility.
