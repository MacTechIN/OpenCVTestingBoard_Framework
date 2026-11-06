## 2024-05-24 - Accessibility improvements for ImageUploader
**Learning:**
- Icon-only absolute positioned overlay buttons (e.g. over images) within `overflow-hidden` containers need explicit `aria-label`, `aria-hidden="true"` on the internal icon, and specific Tailwind classes (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`) combined with `shadow-lg` to prevent the focus ring from clipping and to ensure keyboard navigation.
- To allow users to re-upload the exact same file after clearing it via custom UI, the native hidden file input's value must be reset (`e.target.value = ''`) inside its `onChange` handler.

**Action:**
- Always add `aria-label`, hide icons with `aria-hidden`, and apply `focus-visible` ring utilities to icon-only buttons.
- Adjust ring color based on action intent (e.g. `ring-red-500` for destructive actions).
- Always reset `e.target.value = ''` in the `onChange` handler of custom file upload UI components.
