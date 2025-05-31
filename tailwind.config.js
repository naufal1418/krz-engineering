/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))', /* #F8F9FA */
        foreground: 'hsl(var(--foreground))', /* #212529 */
        primary: {
          DEFAULT: 'hsl(var(--primary))', /* #2E7D32 */
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', /* #A5D6A7 */
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'krz-primary-green': 'var(--krz-primary-green)',
        'krz-light-accent-green': 'var(--krz-light-accent-green)',
        'krz-button-green': 'var(--krz-button-green)',
        'krz-light-background': 'var(--krz-light-background)', /* Updated to use CSS var */
        'krz-text-dark-gray': 'var(--krz-text-dark-gray)', /* Updated to use CSS var */
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' }, /* Changed from 0 to 0px */
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' }, /* Changed from 0 to 0px */
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0'},
          '100%': { transform: 'translateY(0)', opacity: '1'},
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};