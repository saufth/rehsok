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
    './src/pages/*.{js,ts,jsx,tsx}',
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
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
}
