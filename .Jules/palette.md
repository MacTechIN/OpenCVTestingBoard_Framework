## 2023-10-27 - ImageUploader File Input Reset Bug
**Learning:** Native `<input type="file">` elements will not trigger the `onChange` event if a user attempts to upload the exact same file immediately after clearing it through a custom UI (like a "Remove Image" button).
**Action:** When wrapping native file inputs with custom upload UIs, ensure that `e.target.value = ''` is called inside the `onChange` handler after reading the file, so the browser recognizes subsequent identical file selections as new changes.
