## 2024-06-11 - File Input State Clearing and Focus Ring Clipping
**Learning:**
1. When a user uploads a file, clears it via a custom UI, and tries to upload the *exact same* file again, the browser's native `<input type="file">` does not fire an `onChange` event because its internal value hasn't changed.
2. In Tailwind, absolutely positioned buttons (like a clear button over an image) within `overflow-hidden` containers can have their focus rings clipped if the standard `ring` classes are used without considering spacing or using offsets.

**Action:**
1. Always add `e.target.value = ''` within the `onChange` handler of a hidden file input after processing the file selection. This ensures subsequent selections of the same file will trigger the event.
2. For absolute buttons near the edge of `overflow-hidden` containers, use `focus-visible:ring-offset-2` alongside the focus ring classes to prevent clipping and improve visibility.
