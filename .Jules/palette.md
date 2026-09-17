
## 2026-09-17 - Focus Rings on Absolute Positioned Overlays
**Learning:** When applying focus visible rings to absolute positioned buttons that overlay images within 'overflow-hidden' containers, the focus ring may clip. Using standard Tailwind ring utilities without a shadow can make the ring invisible or partially hidden.
**Action:** Use 'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none shadow-lg' on these elements, adjusting the ring color to match the intent (e.g., ring-red-500 for destructive actions like remove).

## 2026-09-17 - Native File Input React state mismatch
**Learning:** Clearing a custom UI representation of a selected file does not clear the underlying hidden native '<input type="file">' value. This prevents users from re-selecting the exact same file immediately after clearing it, as the browser does not fire the 'onChange' event if the file path hasn't changed.
**Action:** Always reset the native file input value ('e.target.value = ""') inside its 'onChange' handler after processing the selected file to ensure the same file can be re-selected if necessary.
