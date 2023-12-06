/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Light-pink": "rgb(249, 240, 255)",
        "grayish-purple": "rgb(140, 105, 145)",
        "Dark-purple": "rgb(47, 21, 51)",
      },
      backgroundImage: (theme) => ({
        "background-pattern":
          "url('/assets/images/background-pattern-desktop.svg')",
      }),
    },
  },
  plugins: [],
};
