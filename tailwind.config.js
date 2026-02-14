/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#004fe3',
        'background': '#f8f9fa',
        'foreground': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
