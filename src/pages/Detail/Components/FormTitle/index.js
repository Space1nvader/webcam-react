import React from 'react';
import './index.scss';

const FormTitle = (props) => {
  const { children, ...other } = props;
  return (
    <h6 className="formTitle" {...other}>
      {children}
    </h6>
  );
};

export default FormTitle;
