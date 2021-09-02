import clsx from 'clsx';
import React from 'react';
import AccountError from '../AccountError';

const AccountErrors = (props) => {
  const { className, errors } = props;
  return (
    <div className={clsx(className)}>
      {errors.map((error) => (
        <AccountError key={error.title} title={error.title} text={error.text} />
      ))}
    </div>
  );
};
export default AccountErrors;
