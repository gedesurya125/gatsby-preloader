// No nesting! - colors declarations can only be one level deep
// No variables - you can't reference the colors by var name (e.g. 'primary') within this file

const base = {
  background: '#FDF8E4', // beige500
  beige300: '#FFFFEC',
  beige500: '#FDF8E4',
  beige600: '#F8F2D9',
  blue700: '#003D7A',
  blue900: '#001E3D',
  blue1000: '#00162E',
  red: '#FF0000',
  yellow: '#FFBC00',
  hoverBlue: '#D3DDE5'
};

const textColors = {
  text: base.blue900,
  heading: base.blue900
};

export const colors = {
  // defaults
  ...base,
  ...textColors
};
