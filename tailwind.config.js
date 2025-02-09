const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["Lobster", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
