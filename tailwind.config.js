/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '72px', // Add a custom value
      },

      boxShadow: {
        custom: '0 0 10px rgba(0, 0, 0, 0.2)', // Example of a uniform shadow
        customDark: '0 0 50px rgba(255, 255, 255, 0.2)', // Example of a uniform shadow

      },

      fontFamily: {
        OrbitronMedium: ['OrbitronMedium', 'sans-serif'],
        RobotoLight: ['RobotoLight', 'sans-serif'],
        MontserratLight: ['MontserratLight', 'sans-serif']
        
        // Add more custom fonts here
      },

      fontSize: {
        'size1-5rem': '1.05rem',
      },

      lineHeight: {
        custom: '1.4',
      },

      

    


    },
  },
  plugins: [],
}
