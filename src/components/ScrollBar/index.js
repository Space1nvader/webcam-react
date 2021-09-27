import React from 'react';
import clsx from 'clsx';
import './index.scss';

const ScrollBar = (props) => {
  const { children, className = '', role: Role = 'div', ...other } = props;
  return (
    <Role className={clsx('scrollbar', className)} {...other}>
      {children}
    </Role>
  );
};

export default ScrollBar;
