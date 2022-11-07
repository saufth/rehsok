const sizingConfig = {
  breakpoints: {
    xs: '20rem', /* 320px */
    sm: '24rem', /* 384px */
    md: '28rem', /* 448px */
    lg: '32rem', /* 512px */
    xl: '36rem', /* 576px */
    '2xl': '42rem', /* 672px */
    '3xl': '48rem', /* 768px */
    '4xl': '56rem', /* 896px */
    '5xl': '64rem', /* 1024px */
    '6xl': '72rem', /* 1152px */
    '7xl': '80rem' /* 1280px */
  },
  defaults: {
    0.75: '0.1875rem', /* 3px */
    15: '3.75rem', /* 60px */
    18: '4.5rem', /* 72px */
    18.75: '4.688rem', /* 75px */
    '600px': '600px'
  }
}

const spacingConfig = {
  defaults: {
    0.75: '0.1875rem' /* 3px */
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/core/components/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'archivo-regular': ['Archivo Regular', 'sans-serif'],
      'archivo-medium': ['Archivo Medium', 'sans-serif'],
      'archivo-semibold': ['Archivo Semibold', 'sans-serif'],
      'archivo-bold': ['Archivo Bold', 'sans-serif'],
      'archivo-extrabold': ['Archivo Extrabold', 'sans-serif'],
      'archivo-black': ['Archivo Black', 'sans-serif']
    },
    extend: {
      colors: {
        rehsok: {
          indigo: '#163A62',
          gray: '#5B5C5F'
        },
        'blue-pantone': '#0023c4',
        'rich-black': '#001024'
      },
      width: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      height: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      padding: {
        ...spacingConfig.defaults
      },
      margin: {
        ...spacingConfig.defaults
      },
      dropShadow: {
        '3xl': '0px 4px 8px rgba(0, 0, 0, .4)'
      },
      animation: {
        'steam-to-t': 'steam-to-t 5s ease-in-out',
        'steam-to-b': 'steam-to-b 5s ease-in-out',
        'steam-to-r': 'steam-to-r 5s ease-in-out',
        'steam-to-tr': 'steam-to-tr 5s ease-in-out',
        'steam-to-br': 'steam-to-br 5s ease-in-out',
        'steam-to-l': 'steam-to-l 5s ease-in-out',
        'steam-to-tl': 'steam-to-tl 5s ease-in-out',
        'steam-to-bl': 'steam-to-bl 5s ease-in-out',
      },
      keyframes: {
        'steam-to-t': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateY(-8rem)',
            opacity: 0
          }
        },
        'steam-to-b': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateY(8rem)',
            opacity: 0
          }
        },
        'steam-to-r': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateX(8rem)',
            opacity: 0
          }
        },
        'steam-to-tr': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(3rem, -8rem)',
            opacity: 0
          }
        },
        'steam-to-br': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(3rem, 8rem)',
            opacity: 0
          }
        },
        'steam-to-l': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translateX(-8rem)',
            opacity: 0
          }
        },
        'steam-to-tl': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(-3rem, -8rem)',
            opacity: 0
          }
        },
        'steam-to-bl': {
          '64%': { opacity: 0.4 },
          '100%': {
            transform: 'translate(-3rem, 8rem)',
            opacity: 0
          }
        }
      },
      transitionDuration: {
        '50': '50ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms'
      },
      transitionDelay: {
        '0': '0ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms'
      }
    }
  },
  plugins: []
}
