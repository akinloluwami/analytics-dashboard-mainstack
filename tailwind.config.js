/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FF5403",
        sec_gray: "#56616B",
      },
    },
  },
  plugins: [],
};
