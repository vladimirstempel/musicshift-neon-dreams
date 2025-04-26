import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
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
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        neon: {
          pink: "#D946EF",
          purple: "#8B5CF6",
          blue: "#1EAEDB",
          cyan: "#00FFFF"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
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
      backgroundImage: {
        "synthwave-grid": "linear-gradient(180deg, rgba(13, 12, 34, 0) 0%, #0d0c22 100%), repeating-linear-gradient(90deg, rgba(139, 92, 246, 0.07) 0px, rgba(139, 92, 246, 0.07) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(139, 92, 246, 0.07) 0px, rgba(139, 92, 246, 0.07) 1px, transparent 1px, transparent 60px), linear-gradient(0deg, rgba(13, 12, 34, 0) 0%, #0d0c22 100%)",
        "gradient-primary": "linear-gradient(90deg, #9b87f5 0%, #D946EF 100%)",
        "gradient-secondary": "linear-gradient(90deg, #1EAEDB 0%, #8B5CF6 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
