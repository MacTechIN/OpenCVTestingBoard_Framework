## 2023-10-25 - Absolute Overlay Button Accessibility
**Learning:** Absolute positioned overlay buttons (e.g., the clear image button) within overflow-hidden containers can have their focus rings clipped, making keyboard navigation invisible.
**Action:** Use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` with `shadow-lg` to prevent focus ring clipping and ensure the ring color matches the action intent (e.g., `focus-visible:ring-red-500`).

## 2023-10-25 - Re-uploading the Same File
**Learning:** If a user clears an uploaded image and tries to upload the exact same file again via the custom file input button, the native `<input type="file">` won't trigger its `onChange` event because its internal value hasn't changed.
**Action:** Always reset the native hidden file input's value (`e.target.value = ''`) inside its `onChange` handler after processing the selected file.
