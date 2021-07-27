import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import { theme } from 'constants/customTheme';
import { ThemeProvider } from '@material-ui/styles';
import { store } from 'redux/index';
import { Provider } from 'react-redux';

const Layout = ({ children }) => (
  <main className="main">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div className="wrapper">{children}</div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </main>
);

export default Layout;
