## 2024-05-24 - [Accessible Icon-Only Buttons]
**Learning:** Icon-only buttons often lack accessible names for screen readers, meaning they fail to convey their purpose without context. Also, keyboard users may not see a clear focus state without `focus-visible`.
**Action:** When implementing icon-only buttons, always ensure an explicit `aria-label` is provided, add `aria-hidden="true"` to the internal icon element to prevent screen readers from reading out cryptic icon names, and add Tailwind `focus-visible` classes to ensure strong focus indicators for keyboard navigation.
