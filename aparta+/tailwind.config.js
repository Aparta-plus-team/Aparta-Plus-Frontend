/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-blue': '#094152',
        'color-midnight-blue': '#0E6681',
        'color-gray': '#d9d3d6',
      },
    },
  },
  plugins: [],
}

