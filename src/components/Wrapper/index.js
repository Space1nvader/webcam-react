import React from 'react';
import './index.scss';

const Wrapper = (props) => {
  const { children, ...other } = props;
  return (
    <div className="wrapper" {...other}>
      {children}
    </div>
  );
};

export default Wrapper;
