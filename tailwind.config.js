/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        'relab-blue': '#003A5C',
        'relab-teal': '#00A7A7',
        'relab-gray': '#F4F4F4',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],  // Nunito = font di default
      },
      borderRadius: {
        relab: '20px',
        'relab-lg': '28px',
      },
    },
  },
  plugins: [],
};
