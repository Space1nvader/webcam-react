import React from 'react';
import './index.scss';

const PapperRow = (props) => {
  const { title, children, ...other } = props;
  return (
    <div className="papperRow" {...other}>
      <div className="papperRow__title">{title}</div>
      <div className="papperRow__value">{children}</div>
    </div>
  );
};

export default PapperRow;
