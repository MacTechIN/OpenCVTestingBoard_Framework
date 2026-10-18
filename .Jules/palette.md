## 2024-03-20 - Image Uploader Accessibility & Input Reset
**Learning:** Found that absolute positioned icon-only overlay buttons require specific focus-visible styling (offset and explicit outline-none) to avoid ring clipping within overflow-hidden containers. Additionally, native file inputs need their value reset on change so users can re-upload the same file after clearing.
**Action:** Always add focus-visible rings with offsets to overlay buttons, use `aria-label` with translations for icon-only buttons, and reset file input values in their onChange handlers.
