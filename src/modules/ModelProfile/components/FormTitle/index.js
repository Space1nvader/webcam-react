import React from 'react';
import './index.scss';

const FormTitle = (props) => {
  const { children, ...other } = props;
  return (
    <h5 className="formTitle" {...other}>
      {children}
    </h5>
  );
};

export default FormTitle;
