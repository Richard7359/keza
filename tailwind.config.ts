import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 0s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      letterSpacing: {
        'tighter': '0.5px',
      },
      fontWeight: {
        'custom-light': '500',
      },
      fontFamily: {
        'sans': ['sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'times': ['Times New Roman', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        burgundy: "#882539",
        image: "#e6ebef",
        "team-bg": "#f2f2f2",
        "burgundy-light": "#cfa8b0",
        "custom-gray": "#f0f0f0",
        btnHover: "#611A28",
        lightCyan: "#BDF7B7",
        deepSkyBlue: "#00BFFF",
        green: "#50C54C",
        orange: "#FD790D",
        footer: "#656565",
        all: '#e6c92d',
        allLight: '#f7e990',
        level1: '#9d9d3b',
        level2: '#fa5e35',
        level3: '#55c5f7',
        level4: '#006c67',
        darkGrey: "#222222",
        black: "#000000",
        paragraph: "#4b587c",
        badge: "#e6eeff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-animate")],
};

export default config;