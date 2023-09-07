/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#93e9be",
        dark: {
          light: "gray",
          hard: "black",
          soft: "white",
        }
      },
      fontFamily: {
        robotomono: ["'Roboto Mono'", "monospace"],
        sourcecodepro:["'Source Code Pro'", "monospace"],
        prompt: ["'Prompt'", "sans-serif"],
      }
    },
  },
  plugins: [],
}

