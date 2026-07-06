
## 2023-10-27 - [ImageUploader] Icon-only Button Accessibility
**Learning:** Icon-only absolute-positioned buttons inside overflow containers (like the Remove Image button over an image) can have their default browser focus rings clipped or be hard to see. They also lack screen reader context without proper ARIA labels.
**Action:** Always add an explicit `aria-label` utilizing the `t()` translation function, `aria-hidden="true"` on the internal icon element to prevent redundant announcements, and use explicit Tailwind `:focus-visible` outline styles (e.g., `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-red-500`) with `shadow-lg` so the focus state is clear and doesn't get clipped.
