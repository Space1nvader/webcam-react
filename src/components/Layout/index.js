import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import { theme } from 'constants/customTheme';
import { ThemeProvider } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { getModelErrorsAction } from 'redux/actions/modelErrors';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getModelErrorsAction());
  }, []);
  return (
    <main className="main">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <div className="wrapper">{children}</div>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  );
};

export default Layout;
