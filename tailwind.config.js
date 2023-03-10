/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-underline-1": "url(/icons/small-line.svg)",
        "hero-underline-2": "url(/icons/large-line.svg)",
      },
      backgroundPosition: {
        under: "bottom 0px right 15px",
      },
      colors: {
        primary: {
          100: "#E5E5E5",
          200: "#CBCBCB",
          300: "#B1B1B1",
          400: "#979797",
          500: "#7D7D7D",
          600: "#636363",
          700: "#494949",
          800: "#2E2E2E",
          900: "#141414",
        },
        secondary: { 400: "#9A9A9A" },
      },
      fontSize: {
        3.75: ".9375rem",
        4.75: "1.1875rem",
        5.75: "1.4375rem",
        6.5: "1.625rem",
        7.25: "1.8125rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
        11.75: "2.9375rem",
        14.75: "3.6875rem",
        18.25: "4.5625rem",
        23: "5.75rem",
      },
      maxWidth: {
        "1/2": "50%",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.8125rem",
      },
      lineHeight: {
        6.75: "1.6875rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
        9.75: "2.4375rem",
        11: "2.8125rem",
        12.25: "3.0625rem",
        14.25: "3.5625rem",
        14.75: "3.6875rem",
        22.12: "5.5313rem",
      },
      letterSpacing: {
        stretch: "0.015em",
        stretcher: "0.02em",
      },
      spacing: {
        0.25: ".0625rem",
        2.5: "0.625rem",
        2.75: "0.6875rem",
        3.25: "0.8125rem",
        4.12: "1.0813rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        5.75: "1.4375rem",
        6.25: "1.5625rem",
        6.5: "1.625rem",
        8.25: "2.0625rem",
        8.5: "2.125rem",
        8.75: "2.1875rem",
        9.25: "2.3125rem",
        9.75: "2.4375rem",
        10.2: "2.625rem",
        11.25: "2.8125rem",
        11.5: "2.875rem",
        11.75: "2.9375rem",
        12.75: "3.1875rem",
        13: "3.25rem",
        13.25: "3.3125rem",
        13.5: "3.375rem",
        15: "3.75rem",
        16.25: "4.0625rem",
        17.5: "4.375rem",
        17.75: "4.4375rem",
        18.5: "4.625rem",
        18.75: "4.6875rem",
        20.5: "5.125rem",
        23.75: "5.9375rem",
        24.1: "6.0256rem",
        24.4: "6.125rem",
        25.5: "6.375rem",
        25.85: "6.4625rem",
        26: "6.5rem",
        26.5: "6.625rem",
        26.75: "6.6875rem",
        27.75: "6.9375rem",
        28.75: "7.1875rem",
        29.25: "7.3125rem",
        30.25: "7.5625rem",
        31.25: "7.8125rem",
        32.75: "8.1875rem",
        33: "8.25rem",
        34.5: "8.625rem",
        39.25: "9.8125rem",
        39.5: "9.875rem",
        39.75: "9.9375rem",
        41.25: "10.3125rem",
        41.75: "10.4375rem",
        42: "10.5rem",
        44.75: "11.1875rem",
        45.75: "11.4375rem",
        52.75: "13.1875rem",
        69.5: "17.375rem",
        74.5: "18.625rem",
        102: "25.5rem",
        170: "42.5rem",
        "7/10": "70%",
        "41/50": "82.222%",
        "89/100": "89%",
        "92/100": "92.5%",
        "93/100": "93%",
      },
    },
  },
  plugins: [],
};
