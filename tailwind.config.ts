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
        'sm': '640px',
        'md': '768px',
        'mdAndLgh': {
          'raw': '(min-width: 768px) and (max-width: 1023px) and (min-height: 1024px)'
        },
        'mdAnd2Lgh': {
          'raw': '(min-width: 768px) and (max-width: 1023px) and (min-height: 1180px)'
        },
        'lg': '1024px',
        'lgAnd1xlh': {
          'raw': '(min-width: 1024px) and (max-width: 1279px) and (min-height: 1366px)'
        },
        'xl': '1280px',
        'xlAnd2smh': {
          'raw': '(min-width: 1280px) and (max-width: 1365px) and (min-height: 720px)'
        },
        '1xl': '1366px',
        '1xlAndMdh': {
          'raw': '(min-width: 1366px) and (max-width: 1535px) and (min-height: 768px)'
        },
        '1xlAndLgh': {
          'raw': '(min-width: 1366px) and (max-width: 1535px) and (min-height: 1024px)'
        },
        '2xl': '1536px',
        '2xlWidth': {'raw': '(min-width: 1536px)'},
        '3xl': '1820px',
        '4xl': '1960px',
      },
      spacing: {
        '15': '60px',
        '20': '80px',
        '30': '120px',
        '75': '300px',
        '140': '560px',
        '145': '580px',
        '150': '600px',
        '152': '608px',
        '165': '660px',
        '180': '720px',
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
