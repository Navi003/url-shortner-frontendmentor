/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          50: "#F6F5F8",
          100: "#EDECF0",
          200: "#D2CFDA",
          300: "#B7B3C4",
          400: "#817997",
          500: "#4B406B",
          600: "#443A60",
          700: "#2D2640",
          800: "#221D30",
          900: "#171320",
        },
        secondary: {
          50: "#F4FDFD",
          100: "#EAFAFA",
          200: "#CAF4F4",
          300: "#AAEDED",
          400: "#6BDFDF",
          500: "#2BD1D1",
          600: "#27BCBC",
          700: "#1A7D7D",
          800: "#135E5E",
          900: "#0D3F3F",
        },
      },
    },
  },
  plugins: [],
};
