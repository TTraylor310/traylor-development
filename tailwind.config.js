// const {nextui} = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/@nextui-org/theme/dist/**/*.{js.ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
        
      // },
      colors: {
        greyBack: '#2F2F2F',
        offWhite: '#E2E4E9',
        darkBlue: '#0E1324',
        tanLightness: '#FFF5D5',
      },
    },
    screens: {
      'sm': '650px',
      'md': '978px',
      'lg': '1250px',
      'xl': '1500px',
    },
  },
  // darkMode: 'class',
  // plugins: [nextui()],

}
