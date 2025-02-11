/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/config/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--wp--preset--font-family--aboreto)",
      },
      colors: {
        "dark-green": "var(--wp--preset--color--dark-green)",
      },
    },
  },
  plugins: [],
};
