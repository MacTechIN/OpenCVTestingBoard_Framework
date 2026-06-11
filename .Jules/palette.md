## 2025-02-14 - Accessible Absolute-Positioned Overlay Buttons

**Learning:** When using absolute-positioned buttons overlaid on other elements (like the 'Remove Image' button over an image container with `overflow-hidden`), the default browser focus ring can get clipped by the container or blend in poorly with the image content.

**Action:** Always combine Tailwind's keyboard focus utility classes (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`) with a drop shadow (`shadow-lg`) for these overlay buttons. The shadow ensures the button stands out against variable image backgrounds, and the `ring-offset-2` prevents the focus ring from being clipped by the button's own bounds or parent containers. Additionally, adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
