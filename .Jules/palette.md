## 2024-05-24 - Accessibility and UX Improvements for File Uploads
**Learning:** For custom file upload UIs, users often clear an image and then want to upload the same image again (e.g., if they accidentally cleared it). The browser won't fire the `onChange` event if the same file is selected because the native hidden input's `value` hasn't changed.
**Action:** Always reset the native hidden file input's value (`e.target.value = ''`) immediately inside its `onChange` handler after processing the file.
