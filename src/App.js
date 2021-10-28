import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import RouteCrubms from 'modules/Breadcrumbs/RouteCrubms';
import { generateAppRoutes } from 'modules/Breadcrumbs/until';
import { dataRoutes } from 'constants/routes';
import { Provider } from 'react-redux';
import { store } from 'redux/index';
import Layout from './components/Layout';

import 'assets/style/main.scss';

const routes = generateAppRoutes(dataRoutes);
const App = () => (
  <Provider store={store}>
    <Layout>
      <Switch>
        {routes.map((route) => (
          <RouteCrubms
            key={route.path}
            label={route.label}
            route={route}
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect from="/" to="/models" />
      </Switch>
    </Layout>
  </Provider>
);

export default App;
