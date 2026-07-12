## 2024-05-18 - [Initial Learnings]\n**Learning:** The application uses a custom `useLanguage` hook for i18n, and translations are hardcoded in `src/lib/i18n.ts`. Icon-only buttons must have an explicit `aria-label` utilizing the `t()` translation function.\n**Action:** Apply translations to all new ARIA labels added.

## 2026-07-12 - [Accessibility for absolute positioned buttons]
**Learning:** Absolute positioned overlay buttons within overflow-hidden containers can have their focus rings clipped. Adding focus-visible:ring-offset-2 and an appropriate ring color (e.g., focus-visible:ring-red-500 for destructive actions) alongside shadow-lg ensures visibility without clipping.
**Action:** Add these specific focus-visible tailwind classes and aria-labels to absolute positioned icon-only buttons.
