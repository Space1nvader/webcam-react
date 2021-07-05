import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithTitle = ({ component: Component, label, route, ...props }) => (
  <Route
    {...props}
    render={(routeProps) => <Component label={label} route={route} {...routeProps} />}
  />
);
export default RouteWithTitle;
