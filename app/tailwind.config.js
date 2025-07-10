/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        // Custom TerpTunes colors
        'terp-green': {
          50: 'rgb(var(--terp-green-50) / <alpha-value>)',
          100: 'rgb(var(--terp-green-100) / <alpha-value>)',
          200: 'rgb(var(--terp-green-200) / <alpha-value>)',
          300: 'rgb(var(--terp-green-300) / <alpha-value>)',
          400: 'rgb(var(--terp-green-400) / <alpha-value>)',
          500: 'rgb(var(--terp-green-500) / <alpha-value>)',
          600: 'rgb(var(--terp-green-600) / <alpha-value>)',
          700: 'rgb(var(--terp-green-700) / <alpha-value>)',
          800: 'rgb(var(--terp-green-800) / <alpha-value>)',
          900: 'rgb(var(--terp-green-900) / <alpha-value>)',
        },
        'forest': {
          50: 'rgb(var(--forest-50) / <alpha-value>)',
          100: 'rgb(var(--forest-100) / <alpha-value>)',
          200: 'rgb(var(--forest-200) / <alpha-value>)',
          300: 'rgb(var(--forest-300) / <alpha-value>)',
          400: 'rgb(var(--forest-400) / <alpha-value>)',
          500: 'rgb(var(--forest-500) / <alpha-value>)',
          600: 'rgb(var(--forest-600) / <alpha-value>)',
          700: 'rgb(var(--forest-700) / <alpha-value>)',
          800: 'rgb(var(--forest-800) / <alpha-value>)',
          900: 'rgb(var(--forest-900) / <alpha-value>)',
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