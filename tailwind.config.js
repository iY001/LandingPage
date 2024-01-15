/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors : {
        main : '#F5F7FA',
        primary: '#28CB8B',
        d_grey: '#4D4D4D',
        secondary: '#263238',
        info : "#2194f3",
        shade1:'#43A046',
        shade2:'#388E3B',
        shade3:'#237D31',
        shade4:'#1B5E1F',
        sahde5:'#103E13',
        tint1:'#66BB69',
        tint2:'#81C784',
        tint3:'#A5D6A7',
        tint4:'#C8E6C9',
        tint5:'#E8F5E9'
      },
      fontSize:{
        'header' : '64px',
      }
      
    },
  },
  plugins: [],
}

