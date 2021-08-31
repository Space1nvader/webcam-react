import clsx from 'clsx';
import React from 'react';
import './index.scss';

const Papper = (props) => {
  const { children, className, ...other } = props;
  return (
    <div className={clsx('papper', className)} {...other}>
      {children}
    </div>
  );
};

export default Papper;
