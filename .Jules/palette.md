## 2024-03-01 - Enhance ImageUploader accessibility and file re-upload
**Learning:**
1. The `<input type="file" className="hidden">` retains the previously selected file's value even after the preview is cleared in the state. This means users cannot re-upload the same file immediately after clearing it because the `onChange` event doesn't trigger if the file value hasn't changed.
2. For absolute positioned overlay buttons inside `overflow-hidden` containers, standard focus rings can be clipped, making them inaccessible for keyboard users.

**Action:**
1. Always reset the file input's value (`e.target.value = ''`) at the end of its `onChange` handler when building custom file upload UI components that support clearing.
2. Apply `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with a `shadow` utility class on absolutely positioned overlay buttons to ensure the focus indicator remains fully visible without being clipped by the parent container's bounds. Match the ring color to the action (e.g., `focus-visible:ring-red-500` for delete).