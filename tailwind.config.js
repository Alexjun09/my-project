/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#15803D",

          secondary: "#86EFAC",

          tertiary: "#CA8A04",

          yellow2: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: ["clamp(42px,4vw,80px)", "clamp(52px,5vw,90px)"],
        subtitle: ["clamp(22px,3vw,50px)", "clamp(26px,4vw,90px)"],
        content: ["clamp(17px,1.5vw,35px)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
