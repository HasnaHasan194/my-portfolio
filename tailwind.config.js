/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090B',
        'secondary-background': '#111318',
        'card-background': '#171A20',
        'fluorescent-lime': '#C6FF3D',
        'electric-green': '#7CFF6B',
        'soft-white': '#F5F5F0',
        'secondary-text': '#A2A6AE',
        'subtle-borders': '#292D34',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
