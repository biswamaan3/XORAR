/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        silentForest: ['var(--font-silent-forest)'],
        lufga: ['var(--font-lufga)'],
        satoshi: ['var(--font-satoshi)'],
        integralCF: ['var(--font-integral-cf)'],
        mono: ['var(--font-roboto-mono)'],
        lexend: ['var(--font-lexend)'],
      },
    },
  },
  plugins: [],
};
