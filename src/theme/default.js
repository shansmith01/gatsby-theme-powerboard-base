// declare variables here

const colors = {
  background: 'white',
  muted: '#ecebff',
  text: '#333',
  primary: '#f86d70',
  secondary: '#f86d70',
};

const defaultTheme = {
  id: 'base',
  colors: {
    background: 'white',
    muted: '#ecebff',
    text: '#333',
    primary: '#f86d70',
    secondary: '#f86d70',
  },
  fonts: {
    mainFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    headingFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: [300, 400, 500, 600, 700],
  sizes: {
    maxWidth: '800px',
  },
  layout: {
    maxWidth: '800px',
    globalPadding: '1rem 2rem',
  },
  border: {
    borderWidths: 0,
    borderRadius: 10,
  },
  styles: {
    shadow: '9px 8px 7px -2px rgba(227,224,227,0.84)',
  },
  buttons: {
    primary: {
      color: colors.text,
      backgroundColor: colors.primary,
    },
    secondary: {
      color: colors.text,
      backgroundColor: colors.secondary,
    },
  },
  space: [0, 4, 8, 16, 32, 64],
  breakpoints: ['40em', '52em', '64em'],
};

export default defaultTheme;

export const darkTheme = {
  ...defaultTheme,
  colors: {
    background: 'black',
    text: '#fff',
    primary: '#f86d70',
    secondary: '#f86d70',
    muted: '#ecebff',
  },
};
