/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /xl:w-\[.*\]/, // Matches `xl:w-[...]`
    },
    {
      pattern: /xl:h-\[.*\]/, // Matches `xl:h-[...]`
    },
    {
      pattern: /lg:.*-.*-.*/, // Matches other dynamic lg-prefixed classes
    },
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: { raw: '(min-width: 300px) and (max-width: 400px)' },
      },
      brightness: {
        15: '0.27', // 15% brightness
        120: '1.2', // 120% brightness
        200: '2', // Double brightness
      },
      fontFamily: {
        anzo6: ['anzo6', 'sans-serif'],
        real: ['real', 'sans-serif'],
        real2: ['real2', 'sans-serif'],
        pop: ['pop', 'sans-serif'],
        pop2: ['pop2', 'sans-serif'],
      },
      backgroundImage: {
        'ig-gradient': 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)',
        'logo-gradient': 'linear-gradient(to right, #ff7e5f, #feb47b)',
        'usa-flag': 'linear-gradient(to bottom, #002868 25%, #ffffff 25%, #ffffff 37.5%, #bf0a30 37.5%, #bf0a30 50%, #ffffff 50%, #ffffff 62.5%, #bf0a30 62.5%, #bf0a30 75%, #ffffff 75%, #ffffff 87.5%, #bf0a30 87.5%, #bf0a30 100%)',
      },
    },
  },
  variants: {
    textAlign: ['rtl'], // Add this to enable rtl direction support
  },
  plugins: [],
}

