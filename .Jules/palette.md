## 2024-06-21 - ImageUploader component A11y and Focus States
**Learning:** Adding explicit focus-visible states with offset (`focus-visible:ring-2 focus-visible:ring-offset-2`) is crucial for components inside `overflow-hidden` containers, and icon-only buttons like the remove image cross must be explicitly hidden (`aria-hidden="true"`) to screen readers while the wrapper button receives an `aria-label`.
**Action:** Always check interactive elements for `focus-visible` states when adding or modifying them, and hide decorative Lucide icons when an `aria-label` provides the context.
