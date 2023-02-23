module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  daisyui: {
    styled: true,
    themes: [
      {
        dark: {
          primary: "#EA7C69",
          "base-100": "#252836",
          "base-200": "#1F1D2B",
          neutral: "#EA7C69",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
};
