import React from 'react';
import './index.scss';

const RouteButton = (props) => {
  const { children, active, icon, className, ...other } = props;
  return (
    <button
      type="button"
      className={`RouteButton ${active ? 'active' : ''} ${className || ''}`}
      {...other}
    >
      {icon || ''}
      {children}
    </button>
  );
};

export default RouteButton;
