/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: { "3xl": "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" },
    },
  },
  plugins: [],
};
