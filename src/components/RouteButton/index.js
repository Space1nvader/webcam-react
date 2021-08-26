import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './index.scss';

const RouteButton = (props) => {
  const { children, to, icon, className = '', ...other } = props;
  // TODO: ACTIVE CILDREN
  // const isActiveRoute = (match, location) => console.log(match, location);
  return (
    <NavLink
      to={to}
      activeClassName="active"
      // isActive={(match, location) => isActiveRoute(match, location)}
      className={clsx(`routeButton ${className}`)}
      {...other}
    >
      {icon && icon}
      {children}
    </NavLink>
  );
};

export default RouteButton;
