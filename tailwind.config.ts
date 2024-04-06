/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
      screens: {
        "2xl": "1400px",
        "smd": "685px",
        "laptop": "1326px",
      },
    },
    backgroundSize: {
      '0%': '0% 0%',
      '100%': '100% 100%',
    },
    extend: {
      transitionProperty: {
        'display': 'display',
        'height': 'height',
        'spacing': 'margin, padding',
        'user_card': 'transform, background-color, height, display',
        'edit_hover': 'background-size, background-color',
      },
      transitionDuration: {
        '400': '400ms',
        '25': '25ms',
        '0.5': '.5s',
      },
      transitionTimingFunction: {
        'in-scroll': 'cubic-bezier(.56,.97,.64,.97)',
      },
      willChange: {
        'fontSize': 'font-size',
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
      backgroundImage: {
        'royal-pattern': "url('/assets/images/bg_royal.svg')"
      },
      backgroundSize: {
        '10': '10%',
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
        heart: {
          '0%, 17.5%': { 
            fontSize: '0', 
            color: 'gold',
           },
           '90%': {
            color: 'purple',
           }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'hearts': 'heart 1s cubic-bezier(.17, .89, .32, 1.49)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}