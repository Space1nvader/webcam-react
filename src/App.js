import React from 'react';
import { Switch } from 'react-router-dom';
import RouteCrubms from 'modules/Breadcrumbs/RouteCrubms';
import { generateAppRoutes } from 'modules/Breadcrumbs/until';
import { dataRoutes } from 'api/routes';
import Layout from './components/Layout';
import 'assets/style/main.scss';

const routes = generateAppRoutes(dataRoutes);

function App() {
  return (
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
      </Switch>
    </Layout>
  );
}

export default App;
