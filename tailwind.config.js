/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary": "var(--c-primary)",
        "primary-light": "var(--c-primary-light)",
        "primary-dark": "var(--c-primary-dark)",
        "primary-darker": "var(--c-primary-darker)",
        "charcoal-green": "var(--c-charcoal-green)",
      }
    },
  },
  plugins: [],
}

