import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Header from 'components/Header';
import User from 'components/User';
import Layout from './components/Layout';
import 'assets/style/main.scss';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </BrowserRouter>
    </Layout>
  );
}

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
// "eject": "react-scripts eject"

export default App;
