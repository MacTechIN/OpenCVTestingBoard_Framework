## 2025-02-23 - Absolute Positioned Icon Buttons
**Learning:** For absolute positioned overlay buttons (e.g., over images), standard focus rings might be clipped by the parent's `overflow-hidden`. They also need a shadow to ensure focus is visible against varied backgrounds.
**Action:** Use Tailwind classes `focus-visible:ring-offset-2` and `shadow-lg` for absolute positioned icon buttons to ensure keyboard focus visibility, alongside standard `aria-label` and `aria-hidden="true"` on the internal icon.
