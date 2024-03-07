/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          lg: "4rem"
        }
      },
      fontFamily: {
        sans: ["'Helvetica', 'Arial', 'sans-serif'"]
      },
      backgroundImage: {
        homepage: "url('../img/home-bg.jpg')"
      },
      backgroundColor: {
        primary: "#131920",
        secondary: "#1D2630",
        lighter: "#8996A4"
      },
      borderColor: {
        primary: "#1D2630",
        secondary: "#3E4853"
      },
      textColor: {
        primary: "#8996A4",
        bright: "#F3F5F7",
        light: "#BEC8D0"
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px"
      }
    },
    screens: {
      "2xs": "160px",
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    }
  },
  plugins: []
}
