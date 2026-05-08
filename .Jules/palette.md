## 2026-05-08 - Added Form & Icon Accessibility Across Components
**Learning:** This application's custom components often lack explicit label associations (`htmlFor` / `id`), rely on implied accessibility for form inputs like search bars and range sliders without explicit `aria-label`s, and fail to hide purely decorative icons (like Lucide React icons) from screen readers.
**Action:** Always ensure that form inputs have a visually associated label using `id` and `htmlFor`, or an `aria-label` if a visual label is absent. Ensure that all decorative icons have `aria-hidden="true"`.
