/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
        
      // },
      colors: {
        greyBack: '#2F2F2F',
        offWhite: '#E2E4E9',
        darkBlue: '#070A14',
        tanLightness: '#FFF5D5',
      },
    },
  },
  plugins: [
  ],
}
