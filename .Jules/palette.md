
## 2024-05-18 - File Input State Reset for Re-uploading
**Learning:** Native `<input type="file">` elements do not trigger `onChange` if the user selects the exact same file sequentially. In custom UI uploaders where the image can be cleared via a separate button, this creates a frustrating bug where users cannot immediately re-upload a file they just removed.
**Action:** Always reset the native file input's value (`e.target.value = ''`) immediately inside its `onChange` handler after processing the selected file.
