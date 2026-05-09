/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'reage-blue': '#43A0C8',   
        'reage-yellow': '#FCE58C',  
        'reage-dark': '#0B3B5C',    
        'reage-bg': '#F8FAFC',      
        'primary': '#43A0C8',       
      },
    },
  },
  plugins: [],
}