module.exports = {
  darkMode: 'class',  // Add this line - tells Tailwind to use class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
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
      maxHeight: {
        '1/5': '20%', // Adding a custom utility for max-height: 20%
      },
      spacing: {
        // now you can use `mt-18` for 72px (4.5rem)
        18: "4.5rem",
      },
    },
  },
  plugins: [],
}