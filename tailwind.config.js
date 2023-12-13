/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./layouts/**/*.{html,js}",
    "./src/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1540px",
    },
    colors: {
      red: "#e84e0f",
      rosa: "#f7ebed",
      green: "#00a565",
      greenTwo: "#a9ba2f",
      brown: "#55493d",
    },
    extend: {
      sans: ['Inter', 'Arial', 'sans-serif'],
    },
      fontSize: {
        xsmall: [
          "12px",
          {
            fontWeight: "200",
            lineHeight: "12px",
          },
        ],
        small: [
          "15px",
          {
            fontWeight: "400",
            lineHeight: "1rem",
          },
        ],
        p: [
          "20px",
          {
            fontWeight: "400",
            lineHeight: "1.5rem",
          },
        ],
        h4: [
          "24px",
          {
            fontWeight: "400",
            lineHeight: "2.5rem",
          },
        ],
        h3: [
          "45px",
          {
            fontWeight: "600",
            lineHeight: "3.5rem",
          },
        ],
        h3sm: [
          "35px",
          {
            fontWeight: "600",
            lineHeight: "3rem",
          },
        ],
        h3xs: [
          "25px",
          {
            fontWeight: "600",
            lineHeight: "3rem",
          },
        ],
        h2: [
          "56px",
          {
            fontWeight: "600",
            lineHeight: "4rem",
          },
        ],
        h1: [
          "72px",
          {
            fontWeight: "900",
            lineHeight: "4.7rem",
          },
        ],
        h1sm: [
          "52px",
          {
            fontWeight: "900",
            lineHeight: "3.7rem",
          },
        ],
        h1semi: [
          "72px",
          {
            fontWeight: "500",
            lineHeight: "4.7rem",
          },
        ],
        h1smsemi: [
          "52px",
          {
            fontWeight: "500",
            lineHeight: "3.7rem",
          },
        ],
      },
    },
  plugins: [],
}

