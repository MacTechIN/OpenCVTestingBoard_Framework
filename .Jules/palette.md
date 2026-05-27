## 2024-05-27 - Absolute Positioned Focus States
**Learning:** For absolute positioned overlay buttons (e.g., clear image buttons) within `overflow-hidden` containers, standard focus rings might get clipped by the container bounds or lack visibility against varied image backgrounds.
**Action:** Use Tailwind classes `focus-visible:ring-2 focus-visible:ring-offset-2` combined with `shadow-lg` to ensure the focus ring remains fully visible and doesn't clip, enhancing keyboard accessibility on varied backgrounds.
