// declare variables here

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
  layout: {
    maxwidth: '800px',
    globalPadding: '1rem 2rem',
    borderRadius: '.25rem',
  },
  styles: {
    shadow: '9px 8px 7px -2px rgba(227,224,227,0.84)',
  },
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
