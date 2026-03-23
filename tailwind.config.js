/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#38bdf8',
        secondary: '#818cf8',
        accent: '#2dd4bf',
        dark: '#0B1120',
        editor: '#1e1e1e',
        panel: '#252526',
        border: '#333333',
      },
    },
  },
  plugins: [],
};
