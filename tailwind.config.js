const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: {
          50: "var(--color-surface-50)",
          100: "var(--color-surface-100)",
          200: "var(--color-surface-200)",
          300: "var(--color-surface-300)",
          400: "var(--color-surface-400)",
          500: "var(--color-surface-500)",
          600: "var(--color-surface-600)",
          700: "var(--color-surface-700)",
          800: "var(--color-surface-800)",
          900: "var(--color-surface-900)",
          950: "var(--color-surface-950)",
        },
        verse: {
          50: "var(--color-verse-50)",
          100: "var(--color-verse-100)",
          200: "var(--color-verse-200)",
          300: "var(--color-verse-300)",
          400: "var(--color-verse-400)",
          500: "var(--color-verse-500)",
          600: "var(--color-verse-600)",
          700: "var(--color-verse-700)",
          800: "var(--color-verse-800)",
          900: "var(--color-verse-900)",
          950: "var(--color-verse-950)",
        },
      },
    },
  },
};
