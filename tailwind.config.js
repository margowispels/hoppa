/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mygreen': "#00bd7e",      
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        'body': ['Inter','-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','Oxygen','Ubuntu','Cantarell','"Fira Sans"','"Droid Sans"','"Helvetica Neue"','sans-serif'],
      }
    },
  },
  plugins: [],
}

