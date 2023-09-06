/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "yellow",
        dark: {
          hard: "black",
          soft: "white",
        }
      },
      fontFamily: {
        robotomono: ["'Roboto Mono'", "monospace"],
        sourcecodepro:["'Source Code Pro'", "monospace"],
      }
    },
  },
  plugins: [],
}

