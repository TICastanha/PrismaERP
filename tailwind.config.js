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
          secondary: "#2E2E2E",
          third: "#FFF",
          action: "#007BFF",
          sucess: "#11b817ff",
          alert: "#E53935",
          backgr: "#F5F5F5"
        }
      },
      fontFamily:{
        inter: ["inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}