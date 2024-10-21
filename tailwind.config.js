/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ffffff", // White for Primary color
        accent: "#D3D3D3", // Grey for Accent color
        secondary: "#000000", // Black for Secondary color
      },
    },
  },
  plugins: [],
};
