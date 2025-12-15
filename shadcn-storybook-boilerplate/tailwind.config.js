/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        sans: ["Min Sans VF", "sans-serif"],
      },
      fontSize: {
        "title-large": ["27px", { lineHeight: "36px", fontWeight: "700" }],
        "title-medium": ["21px", { lineHeight: "28px", fontWeight: "700" }],
        "title-small": ["18px", { lineHeight: "24px", fontWeight: "700" }],
        "body-large": ["16.5px", { lineHeight: "22px", fontWeight: "400" }],
        "body-large-strong": ["16.5px", { lineHeight: "22px", fontWeight: "500" }],
        "body-medium": ["15px", { lineHeight: "20px", fontWeight: "400" }],
        "body-medium-strong": ["15px", { lineHeight: "20px", fontWeight: "500" }],
        "body-small": ["13.5px", { lineHeight: "18px", fontWeight: "400" }],
        "body-small-strong": ["13.5px", { lineHeight: "18px", fontWeight: "500" }],
        "caption-large": ["13.5px", { lineHeight: "18px", fontWeight: "400" }],
        "caption-large-strong": ["13.5px", { lineHeight: "18px", fontWeight: "500" }],
        "caption-medium": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "caption-medium-strong": ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "caption-small": ["10.5px", { lineHeight: "14px", fontWeight: "400" }],
        "caption-small-strong": ["10.5px", { lineHeight: "14px", fontWeight: "500" }],
      },
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
