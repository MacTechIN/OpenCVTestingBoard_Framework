## 2024-05-19 - Accessible Icon-Only Buttons
**Learning:** Found multiple icon-only buttons (like mobile menu toggle and image removal) that were missing proper screen reader labels and clear keyboard focus states, causing accessibility barriers.
**Action:** When adding icon-only buttons, always ensure they include an explicit `aria-label` (using translation strings `t()` for i18n), `aria-hidden="true"` on the actual SVG/icon element to prevent redundant announcements, and use Tailwind's `focus-visible:` classes for robust keyboard navigation support.
