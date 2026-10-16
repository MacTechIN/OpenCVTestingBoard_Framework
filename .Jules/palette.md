## 2024-05-14 - Prevent Focus Ring Clipping on Absolute Overlay Buttons
**Learning:** Absolute positioned buttons (like the `Remove Image` X button overlaid on the image thumbnail) often clip their focus rings when inside `overflow-hidden` containers, breaking keyboard accessibility visual feedback.
**Action:** When adding focus rings to absolute overlay buttons, explicitly add `focus-visible:ring-offset-2` alongside the focus ring classes, and ensure it isn't clipped by wrapping components (using `shadow-lg` instead of raw offsets if necessary to raise the z-context of the ring).

## 2024-05-14 - Re-uploading Cleared Files in Hidden Inputs
**Learning:** When using custom UI to wrap a hidden `<input type="file">`, clearing the image visually (e.g., setting state to null) doesn't clear the native input's file list. If a user tries to immediately re-upload the exact same file they just cleared, the browser's `onChange` event won't fire because the internal file path hasn't changed.
**Action:** Always reset the native input's value (`e.target.value = ''`) inside the `onChange` handler after successfully processing the file. This ensures the native input is ready for the same file to be selected again.
