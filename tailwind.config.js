/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
