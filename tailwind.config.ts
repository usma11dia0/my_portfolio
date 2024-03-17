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
        // 幅に基づくブレークポイント
        'xs': '480px',
        '2xs': '530px',
        '3xs': '576px',
        'sm': '640px',
        '2sm':'668px',
        '3sm':'690px',
        'md': '768px',
        '2md': '825px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1820px',
        '4xl': '1960px',
        // 高さに基づくブレークポイント
        'smh': {'raw': '(min-height: 640px)'},
        'mdh': {'raw': '(min-height: 768px)'},
        '1mdh': {'raw': '(min-height: 820px)'},
        'lgh': {'raw': '(min-height: 900px)'},
        '1lgh': {'raw': '(min-height: 1024px)'},
        'xlh': {'raw': '(min-height: 1280px)'},
        '2xlh': {'raw': '(min-height: 1536px)'},
      },
      spacing: {
        '15': '60px',
        '75': '300px',
        '140': '560px',
        '145': '580px',
        '150': '600px',
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
