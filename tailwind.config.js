/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',


        web1: "url('/main/bhf_images/top1.webp')",
        mobile1: "url('/main/bhf_images/mobile-top2.webp')",
        backg: "url('/main/bhf_images/black.webp')",
        back2: "url('/main/bhf_images/back2.webp')",
      },

    },
  },
  plugins: [],
}
