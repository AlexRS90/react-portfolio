module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6070FF',
        second: '#EBEBFF',
        focus: '#2230D2',
        background: '#e8e8e8',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Header_bg.svg')",
        'footer-pattern': "url('/src/assets/footer.svg')",
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
