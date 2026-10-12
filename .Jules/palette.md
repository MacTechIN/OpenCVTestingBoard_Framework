## 2024-05-18 - File Input Reset and Overlay Button Accessibility

**Learning:**
1. Re-uploading the identical file in a custom `<input type="file">` fails because the `onChange` event doesn't trigger if the `value` is unchanged.
2. For absolute positioned overlay buttons (e.g., 'Remove image') inside containers with `overflow-hidden`, standard focus rings (`focus-visible:ring-2`) can be clipped or invisible, leading to poor keyboard accessibility.

**Action:**
1. Always reset the input value (`e.target.value = ''`) inside the `onChange` handler for file inputs to guarantee identical files can be selected repeatedly.
2. For absolute overlay buttons, explicitly define the focus states with offset (`focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-none`) and use `aria-label` with `aria-hidden` on inner icons for complete screen reader and keyboard support.