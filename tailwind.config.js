module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6070FF',
        second: '#EBEBFF',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Header_bg.svg')",
      },
      borderRadius: {
        extraLarge: '12rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
