# Palette's UX Journal

## 2026-10-26 - Image Uploader Accessibility and Re-upload UX
**Learning:** Native hidden file inputs (`<input type="file" className="hidden" />`) do not clear their internal value state upon UI dismissal (like clicking an 'X' button to remove the uploaded image). If a user clears an image and immediately tries to upload the exact same file, the browser's `onChange` event won't trigger because the internal value hasn't changed.
**Action:** Always reset the event target value (`e.target.value = ''`) inside the `onChange` handler for file inputs associated with a custom clear/remove UI to ensure seamless re-uploads.

**Learning:** Absolute positioned overlay buttons (e.g., the 'X' remove button placed top-right over an uploaded image) can have their focus rings clipped if their container has `overflow-hidden` or is flush against the viewport boundaries.
**Action:** Use `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none` combined with `shadow-lg` to push the focus ring outwards, ensuring visibility. Tailor the ring color (e.g., `focus-visible:ring-red-500`) to match the button's destructive intent.
