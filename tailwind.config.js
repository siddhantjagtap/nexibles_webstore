/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'gotham-black': ['Gotham_Black', 'sans-serif'],
        'gotham-bold': ['Gotham_Bold', 'sans-serif'],
        'gotham-book': ['Gotham_Book', 'sans-serif'],
        'gotham-light': ['Gotham_Light', 'sans-serif'],
        'gotham-medium': ['Gotham_Medium', 'sans-serif'],
        'gotham-regular': ['Gotham_Regular', 'sans-serif'],
        'gotham-rounded-bold': ['Gotham_Rounded_Bold', 'sans-serif'],
        'gotham-medium-italic': ['Gotham_Medium_Italic', 'sans-serif'],
        'Mochiy': ['Mochiy Pop One', 'sans-serif']
      },
      fontSize: {
        'pt-8': '8pt',
        'pt-10': '10pt',
        'pt-12': '12pt',
        'pt-14': '14pt',
        'pt-16': '16pt',
        'pt-18': '18pt',
        'pt-20': '20pt',
        'pt-23': '23pt',
        'pt-24': '24pt',
        'pt-25': '25pt',
        'pt-30': '30pt',
        'pt-36': '36pt',
        'pt-40': '40pt',
        'pt-45': '45pt',
        'pt-50': '50pt',
        'pt-60': '60pt',
        'pt-80': '80pt',
        'pt-72': '72pt',
        'pt-75': '75pt',
        'pt-96': '96pt',
      }
    },
  },
  plugins: [],
};
