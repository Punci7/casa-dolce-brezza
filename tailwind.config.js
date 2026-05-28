/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#3A7CA5',
          light: '#5A9CC5',
          dark: '#1F5F85',
        },
        warm: '#F5F5F0',
        anthracite: {
          DEFAULT: '#2C3E50',
          light: '#4A5568',
        },
        gold: {
          DEFAULT: '#E8B84B',
          light: '#F0CF7A',
          dark: '#C89525',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
