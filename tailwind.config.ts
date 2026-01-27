import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebefff',
          200: '#d6ddff',
          300: '#b3bfff',
          400: '#8799ff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4453b8',
          800: '#374199',
          900: '#2d357d',
        },
        secondary: {
          500: '#764ba2',
        }
      },
    },
  },
  plugins: [],
};
export default config;
