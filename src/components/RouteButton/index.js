import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import './index.scss';

const RouteButton = (props) => {
  const { children, to, icon, className, ...other } = props;
  return (
    <NavLink
      type="button"
      to={to}
      activeClassName="active"
      className={clsx(`RouteButton ${className}`)}
      {...other}
    >
      {icon && icon}
      {children}
    </NavLink>
  );
};

export default RouteButton;
