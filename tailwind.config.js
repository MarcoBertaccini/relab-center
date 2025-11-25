/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'relab-blue': '#003A5C',
        'relab-teal': '#00A7A7',
        'relab-gray': '#F4F4F4',
      },
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        'relab': '20px',
        'relab-lg': '28px',
      },
    },
  },
  plugins: [],
};
