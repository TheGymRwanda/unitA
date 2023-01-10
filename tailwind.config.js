/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#E5E5E5",
          2: "#CBCBCB",
          3: "#B1B1B1",
          4: "#979797",
          5: "#7D7D7D",
          6: "#636363",
          7: "#494949",
          8: "#2E2E2E",
          9: "#141414",
        },
      },
      fontSize: {
        "custom-xs": "0.938rem",
        "custom-sm": "1.188rem",
        "custom-md": "1.5rem",
        "custom-lg": "1.875rem",
        "custom-xl": "2.375rem",
        "custom-2xl": "2.9375rem",
        "custom-3xl": ["3.6875rem", { letterSpacing: "-0.015rem" }],
        "custom-4xl": ["4.5625rem", { letterSpacing: "-0.015rem" }],
        "custom-5xl": "5.75rem",
      },
      spacing: {
        6.25: "1.5625rem",
        4.12: "1.0813rem",
      },
    },
  },
  plugins: [],
};
