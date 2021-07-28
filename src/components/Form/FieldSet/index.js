import React from 'react';
import './index.scss';

const FieldSet = (props) => {
  const { title, divider, className = '', children, ...other } = props;
  const classList = `fieldSet ${className}  ${divider ? 'fieldSet--divider' : ''}`;

  return (
    <div className={classList} {...other}>
      {title && <span className="fieldSet__title">{title}</span>}
      {children}
    </div>
  );
};

export default FieldSet;
