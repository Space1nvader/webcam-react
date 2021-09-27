import React from 'react';
import './index.scss';

const AccountError = (props) => {
  const { title, text } = props;
  return (
    <div className="accountError">
      <span className="accountError__title">{title}</span>
      <div className="accountError__text">{text}</div>
    </div>
  );
};

export default AccountError;
