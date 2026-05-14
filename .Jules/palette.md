## 2026-05-14 - [Accessible Icon Buttons]
**Learning:** Icon-only buttons using Lucide React in this project were missing explicit `aria-label` attributes mapped to translations and `aria-hidden` on the inner SVGs, hindering screen reader users. Additionally, explicit keyboard focus rings were absent.
**Action:** When adding or updating icon-only buttons, always ensure an `aria-label` using `t()` is present, add `aria-hidden="true"` to the internal icon, and include Tailwind `focus-visible:ring-...` classes.
