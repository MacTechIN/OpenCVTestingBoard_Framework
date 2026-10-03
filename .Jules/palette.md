## 2024-02-28 - Focus Rings on Overlay Buttons
**Learning:** Absolute positioned overlay buttons (e.g., a "remove" icon over an image) within `overflow-hidden` containers often have their native focus rings clipped or rendered invisibly, making keyboard navigation difficult or impossible to track.
**Action:** Always add specific focus-visible classes (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`) combined with `shadow-lg` to these elements. Adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).
