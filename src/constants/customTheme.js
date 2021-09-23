import { createTheme } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';

export const theme = createTheme(
  {
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
        main: '#f44336',
        dark: '#9c2b23'
      },
      error: {
        light: '#f6655a',
        main: '#F44336'
      }
    }
  },
  ruRU
);
