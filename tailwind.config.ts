import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'caleb-primary': '#333', // Dark background color
        'caleb-accent': '#ffab00', // Accent color
      },
      fontFamily: {
        baskerville: ['Baskerville', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      spacing: {
        'screen': '100vh',
      }
    },
  },
  plugins: [],
} satisfies Config;
