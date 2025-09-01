/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        prisma:{
          primary: "#FF8C00",
          primaryDark: "#FF6A00",
          neutral: "#2E2E2E",
          white: "#FFF",
          secondary: "#007BFF",
          sucess: "#11b817ff",
          danger: "#E53935",
          background: "#F5F5F5",
        }
      },
      fontFamily:{
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        xxl: "1.5rem",
      },
      spacing: {
        18: "4.5rem",
        72: "18rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 15px rgba(0,0,0,0.15)",
      },
      size: {
        12: "3rem",
        16: "4rem",
        20: "40rem",
      }
    },
  },
  plugins: [],
}