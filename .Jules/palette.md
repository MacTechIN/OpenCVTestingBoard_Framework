## 2024-09-20 - Ensure Absolute Positioned Focus Rings Are Visible
**Learning:** For absolute positioned overlay buttons (like a remove button over an image) within `overflow-hidden` containers, standard focus rings can be clipped, making keyboard navigation hard to track.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to prevent the focus ring from clipping and adapt the ring color to the action's intent (e.g., `focus-visible:ring-red-500` for destructive actions).

## 2024-09-20 - Allow Re-uploading the Same File in Custom Image Uploaders
**Learning:** If a user uploads an image, removes it using a custom UI, and tries to upload the exact same file again, the native hidden file input won't trigger its `onChange` event because the file path hasn't changed.
**Action:** Reset the native hidden file input's value (e.g., `e.target.value = ''`) inside its `onChange` handler immediately after handling the file.
