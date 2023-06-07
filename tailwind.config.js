/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
      handWrite: ["Fasthand"],
      roboto: ["Roboto"],
    },
    colors: {
      neon: "#B70404",
      white: "#fff",
      black: "#0a0a0a",
      darkBrown: "#A4907C",
      lightBrown: "#B4846C",
      lighterBrown: "#E5B299",
      fall: "#FCDEC0",
      darkBlue: "#0A2647",
      lightBlue: "#144272",
      lighterBlue: "#205295",
      ocean: "#2C74B3",
      yellow: "#fcff41",
    },
  },
  plugins: [],
};
