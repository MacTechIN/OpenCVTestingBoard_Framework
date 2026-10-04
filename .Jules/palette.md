## 2024-05-18 - Missing aria-label for Image Removal Button
**Learning:** The "Remove Image" icon-only button in `ImageUploader.tsx` lacks an explicit `aria-label` which relies only on `title` attribute for screen readers, and its internal `X` icon is not hidden from screen readers.
**Action:** Always add an `aria-label` with the translated text `t('removeImage')` and add `aria-hidden="true"` to the inner `<X />` icon component to prevent double-reading by screen readers. Also include `focus-visible` classes to make it easier to navigate with keyboard.
