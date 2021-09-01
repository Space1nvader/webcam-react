import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import './index.scss';

const RouteButton = (props) => {
  const { children, to, icon, className = '', ...other } = props;
  const { pathname } = useLocation();
  const activeClass = () => {
    if (pathname.includes(to)) return 'active';
    return '';
  };
  return (
    <NavLink
      to={to}
      activeClassName="active"
      className={clsx(`routeButton ${className} ${activeClass()}`)}
      {...other}
    >
      {icon && icon}
      {children}
    </NavLink>
  );
};

export default RouteButton;
