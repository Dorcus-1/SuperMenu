    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors:{
            primary:'#A01B2C',
            textGray:'#7C7C7C'
          }
        },
      },
      plugins: [],
    };