/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#7286D3",
        customSkyBlue: "#8EA7E9",
        customLight: "#E5E0FF",
        customTextColor: "#2A2F4F",
      },
    },
  },
  plugins: [],
};
