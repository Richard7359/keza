import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 240s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      } ,
      letterSpacing:{
        'tighter': '0.5px',
      },
      fontWeight:{
        'custom-light': '500',
      },
      fontFamily:{
        'sans': ['sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'times': ['Times New Roman', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        burgundy: "#882539",
        "burgundy-light": "#cfa8b0",
        "custom-gray": "#f0f0f0",
      },
    },
  },
  variants: {

  },
  plugins: [],
};
export default config;
