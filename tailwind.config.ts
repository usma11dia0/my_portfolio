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
      colors: {
        'bg-yellow-primary': 'bg-yellow-400',
        'bg-black-primary': 'bg-[#09101a]',
        'text-black-primary': 'text-black',
        'text-white-primary': 'text-white',
        'text-green-primary': 'text-[#55e6a5]',
      },
      fontFamily: {
        primary: ["Anta", "Poppins"],
      }
    },
  },
  plugins: [],
}