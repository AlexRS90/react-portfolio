module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6070FF',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Header_bg.svg')",
      }
  },
  plugins: [],
  }
};
