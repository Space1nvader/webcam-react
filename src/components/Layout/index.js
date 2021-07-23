import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import { theme } from 'constants/customTheme';
import { ThemeProvider } from '@material-ui/styles';
import { store } from 'redux/index';

const Layout = ({ children }) => (
  <main className="main">
    <ThemeProvider store={store} theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="wrapper">{children}</div>
      </BrowserRouter>
    </ThemeProvider>
  </main>
);

export default Layout;
