function generateSpacing(units) {
  return Array.from({ length: units }, (_, index) => index + 1).reduce(
    (acc, cur) => {
      acc[cur] = `${cur}px`;
      return acc;
    },
    {},
  );
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        mobile: '500px',
        desktop: '1920px',
      },
      spacing: {
        ...generateSpacing(3000),
      },
      fontSize: {
        ...generateSpacing(120),
      },
      lineHeight: {
        ...generateSpacing(150),
      },
      colors: {},
      fontFamily: {},
      transitionDuration: {
        600: '600ms',
        800: '800ms',
      },
      backdropBlur: {
        default: '5px',
        lg: '10px',
        xl: '15px',
      },
      animation: {
        'scale-y-100': 'scaleY100 0.8s ease-in-out forwards',
        'scale-y-0': 'scaleY0 1.6s ease-in-out forwards',
        'shadow-opacity': 'shadowOpacity 0.6s ease-in',
      },
      keyframes: {
        scaleY100: {
          '0%': {
            height: '100%',
            transform: 'scaleY(0)',
          },
          '100%': {
            transform: 'scaleY(1)',
          },
        },
        scaleY0: {
          '0%': {
            transform: 'scaleY(1)',
          },
          '50%': {
            transform: 'scaleY(0)',
          },
          '100%': {
            transform: 'scaleY(0)',
            height: 0,
          },
        },
        shadowOpacity: {
          '0%': {
            opacity: 0.8,
          },
          '50%': {
            opacity: 0.1,
          },
          '100%': {
            opacity: 0.8,
          },
        },
      },
    },
  },
  plugins: [],
};
