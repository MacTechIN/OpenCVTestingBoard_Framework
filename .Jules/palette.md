## 2025-02-20 - Add Accessibility to Overlay Buttons
**Learning:** For absolute positioned overlay buttons (e.g., "Remove Image" buttons over images), standard focus rings can be clipped by parent `overflow-hidden` constraints or blend into varied backgrounds.
**Action:** Always use Tailwind's `focus-visible:ring-offset-2` alongside standard focus classes for absolutely positioned overlay buttons to ensure the focus ring remains visible and unclipped.
