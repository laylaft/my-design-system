/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#001666',
        'copy': '#444444',
        'accent': '#00C89B',
        'primary': {
          DEFAULT: '#001666',
          foreground: '#ffffff',
        },
        'secondary': {
          DEFAULT: '#f8f9fa',
          foreground: '#444444',
        },
      },
      fontFamily: {
        'title': ['Libre Baskerville', 'serif'],
        'body': ['Satoshi', 'sans-serif'],
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      borderRadius: {
        'sm': '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}