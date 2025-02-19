/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'White': '#fff',
        'Gray': '#F5F5F7',
        'LightYellow': '#F0F5E2',
        'LightGreen': '#C7EDE2',
        'DarkYellow': '#F2F9AD',
        'Black': '#000',
        'DarkGreen': '#14E84B',
        'ParaColor': '#696969',
        'HeadColor': '#000'
      },
      fontFamily:{
        'HeadFont': '"Fira Sans", sans-serif',
        'ParaFont': '"Fira Sans", sans-serif'
      },
      boxShadow:{
        'DarkShadow': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'LightShadow': '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
      },
      padding:{
        'pt40': '40px',
        'pb40': '40px',
        'pt15':'80px',
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    },
  },
  plugins: [],
}

