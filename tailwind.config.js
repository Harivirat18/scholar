/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1240px",
      },
      colors: {
        tgray: {
          50: "#7a6ad8",
          100: "rgb(255 255 255 / 10%)",
          200: "#f1f0fe",
        },
      },
    },
  },
  plugins: [],
}

