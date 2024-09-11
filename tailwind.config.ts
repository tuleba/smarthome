import { nextui } from "@nextui-org/react";
const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./public/assets/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      h1: [
        "96px",
        {
          lineHeight: "104px",
        },
      ],
      h2: [
        "60px",
        {
          lineHeight: "68px",
        },
      ],
      h3: [
        "48px",
        {
          lineHeight: "56px",
        },
      ],
      h4: [
        "34px",
        {
          lineHeight: "42px",
        },
      ],
      h5: [
        "24px",
        {
          lineHeight: "32px",
        },
      ],
      h6: [
        "20px",
        {
          lineHeight: "28px",
        },
      ],
      title1: [
        "18px",
        {
          lineHeight: "28px",
        },
      ],
      title2: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      p: [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      btn_large: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      btn_medium: [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      btn_small: [
        "12px",
        {
          lineHeight: "24px",
        },
      ],
      caption_large: [
        "12px",
        {
          lineHeight: "22px",
        },
      ],
      caption_small: [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      colors: {
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
};
