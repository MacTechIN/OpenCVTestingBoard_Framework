## 2026-09-02 - Focus Ring Visibility for Overlay Buttons
**Learning:** Absolute positioned overlay buttons (e.g., over images) within `overflow-hidden` containers require `focus-visible:ring-offset-2` combined with `shadow-lg` to prevent the focus ring from clipping.
**Action:** Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions, `focus-visible:ring-blue-500` otherwise) and explicitly define `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`.
