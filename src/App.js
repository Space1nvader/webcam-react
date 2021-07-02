import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Detail from 'pages/Detail';
import Layout from './components/Layout';
import 'assets/style/main.scss';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/user/:userId" component={Detail} />
      </Switch>
    </Layout>
  );
}

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject"

export default App;
