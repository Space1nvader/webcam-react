import React from 'react';
import './index.scss';

const Papper = (props) => {
  const { children, ...other } = props;
  return (
    <div className="papper" {...other}>
      {children}
    </div>
  );
};

export default Papper;
