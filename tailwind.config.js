/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      flex: {
        2: '2 2 0%',
      },
    },
  },
  plugins: [],
};
