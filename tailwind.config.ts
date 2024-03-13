/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      brightness: {
        '60': '0.6',
      },
      screens: {
        '3xl': '1820px',
        '4xl': '1960px',
      },
      spacing: {
        '15': '60px',
      },
      backgroundImage: {
        banner: 'url("/images/banner.jpg")',
        circles: 'url("/images/bg-circles.png")',
        circleStar: 'url("/images/circle-star.svg")',
        site: 'url("/images/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        primary: ["Anta", "Poppins"],
      }
    },
  },
  plugins: [],
}
