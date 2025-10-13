/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
    extend: {
      colors: {
        // Legacy system support (gradual migration)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Neomorphism Color Palette - Nycayen Brand
        'neo-dark': '#0D0D0D',      // Charcoal Black - Primary background
        'neo-steel': '#3B3B3B',     // Slate Steel - Elevated surfaces, cards
        'neo-taupe': '#A69F97',     // Ash Taupe - Muted text, secondary
        'neo-champagne': '#D8CFC4', // Champagne Mist - Primary text
        'neo-gold': '#C5A46D',      // Soft Gold - Primary accent
        
        // Semantic color mappings
        primary: {
          DEFAULT: '#C5A46D',  // neo-gold
          foreground: '#0D0D0D', // neo-dark
        },
        secondary: {
          DEFAULT: '#3B3B3B',  // neo-steel
          foreground: '#D8CFC4', // neo-champagne
        },
        accent: {
          DEFAULT: '#C5A46D',  // neo-gold
          foreground: '#0D0D0D', // neo-dark
        },
        muted: {
          DEFAULT: '#A69F97',  // neo-taupe
          foreground: '#D8CFC4', // neo-champagne
        },
        popover: {
          DEFAULT: '#3B3B3B',  // neo-steel
          foreground: '#D8CFC4', // neo-champagne
        },
        card: {
          DEFAULT: '#3B3B3B',  // neo-steel
          foreground: '#D8CFC4', // neo-champagne
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1.25rem",
        
        // Neomorphism border radius standards
        'neo-sm': '12px',
        'neo-md': '16px',
        'neo-lg': '20px',
        'neo-xl': '24px',
      },
      boxShadow: {
        // Standard shadows
        xl: "0 4px 32px 0 rgba(0,0,0,0.18)",
        
        // Neomorphism shadow system
        // Elevated (raised, floating elements)
        'neo-flat': '4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(59,59,59,0.1)',
        'neo-elevated': '8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)',
        'neo-high': '12px 12px 24px rgba(0,0,0,0.7), -12px -12px 24px rgba(59,59,59,0.2)',
        
        // Pressed (inset, recessed elements - for inputs, inactive buttons)
        'neo-pressed': 'inset 6px 6px 12px rgba(0,0,0,0.6), inset -6px -6px 12px rgba(59,59,59,0.15)',
        'neo-pressed-deep': 'inset 8px 8px 16px rgba(0,0,0,0.7), inset -8px -8px 16px rgba(59,59,59,0.2)',
        
        // Interactive states
        'neo-elevated-hover': '10px 10px 20px rgba(0,0,0,0.65), -10px -10px 20px rgba(59,59,59,0.18)',
        'neo-focus': '0 0 0 3px rgba(197,164,109,0.3), 8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)',
        
        // Special effects
        'neo-glow': '0 0 20px rgba(197,164,109,0.4), 8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)',
      },
      keyframes: {
        // Existing animations
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        
        // Neomorphism-specific animations
        "neo-pulse": {
          '0%, 100%': { 
            boxShadow: '8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)' 
          },
          '50%': { 
            boxShadow: '12px 12px 24px rgba(0,0,0,0.7), -12px -12px 24px rgba(59,59,59,0.2)' 
          },
        },
        "neo-float": {
          '0%, 100%': { 
            transform: 'translateY(0)',
            boxShadow: '8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)'
          },
          '50%': { 
            transform: 'translateY(-10px)',
            boxShadow: '12px 12px 24px rgba(0,0,0,0.7), -12px -12px 24px rgba(59,59,59,0.2)'
          },
        },
        "neo-press": {
          '0%': { 
            boxShadow: '8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)' 
          },
          '50%': { 
            boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.5), inset -4px -4px 8px rgba(59,59,59,0.1)' 
          },
          '100%': { 
            boxShadow: '8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)' 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neo-pulse": "neo-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "neo-float": "neo-float 3s ease-in-out infinite",
        "neo-press": "neo-press 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
