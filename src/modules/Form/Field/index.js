import React from 'react';
import './index.scss';

const Field = (props) => {
  const { name, children, placeholder, className, icon, style, ...other } = props;

  const classList = `field__input ${className?.length ? className : ''}`;

  return (
    <div className="field" style={style}>
      {children && (
        <label htmlFor={name} className="field__label">
          {children}
        </label>
      )}
      {icon && (
        <label htmlFor={name} className="field__icon">
          <img src={icon} alt="" />
        </label>
      )}
      <input placeholder={placeholder} className={classList} id={name} name={name} {...other} />

      {/* <label htmlFor={name} className="field__error">
        error
      </label> */}
    </div>
  );
};

export default Field;
