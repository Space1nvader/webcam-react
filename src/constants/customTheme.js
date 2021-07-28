import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    common: {
      black: '#d2d2d6'
    },
    primary: {
      light: '#b4b4bb',
      main: '#9696a0',
      dark: '#787885'
    },
    secondary: {
      main: '#f6655a',
      dark: '#f44336'
    },
    error: {
      light: '#f6655a',
      main: '#F44336'
    }
  }
});
