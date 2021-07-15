import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
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
      light: '#fef2f1',
      main: '#FEE8E7',
      contrastText: '#F44336'
    }
  }
});

const Layout = ({ children }) => (
  <main className="main">
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="wrapper">{children}</div>
      </BrowserRouter>
    </ThemeProvider>
  </main>
);

export default Layout;
