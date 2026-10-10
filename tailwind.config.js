/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: "#EDF2F4",      // Creamy Platinum canvas
          surface: "#FFFFFF",     // White elevated surfaces
          indigo: "#2B2D42",      // Space Indigo (headings, dark surfaces, footer)
          lavender: "#8D99AE",    // Lavender Grey (secondary text, quiet borders)
          strawberry: "#EF233C",  // Strawberry Red accent
          flag: "#D90429",        // Flag Red pressed/hover
          darkText: "#4A5066",    // WCAG-compliant high-contrast body text
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
