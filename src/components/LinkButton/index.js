import React from 'react';
import './index.scss';

const LinkButton = (props) => {
  const { children, active, icon, className, ...other } = props;
  return (
    <button
      type="button"
      className={`linkButton ${active ? 'active' : ''} ${className || ''}`}
      {...other}
    >
      {icon || ''}
      {children}
    </button>
  );
};

export default LinkButton;
