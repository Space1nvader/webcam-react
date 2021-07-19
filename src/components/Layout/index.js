import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import { theme } from 'constants/customTheme';
import { ThemeProvider } from '@material-ui/styles';

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
