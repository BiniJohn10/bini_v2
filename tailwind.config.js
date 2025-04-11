/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'gray': '#121212',
        'portfolio-teal-dark': '#002a2a',
        'portfolio-green': '#42B883',
        'portfolio-teal': '#008080',
        'b-teal-100': '#64ffda',
        'bd-gray-light': '#474646',
        'bd-gray-dark': '#181818',

      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(
      function ({ addVariant }) {
        addVariant("glow", ".glow-capture .glow-overlay &")
      },
      {
        theme: {
          extend: {
            colors: {
              glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
            },
          },
        },
      }
    ),
  ],
}