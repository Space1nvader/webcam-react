import React from 'react';
import './index.scss';

const SessionStatus = (props) => {
  const { value, ...other } = props;

  const setStatus = () => {
    if (value) {
      return 'online';
    }
    return 'offile';
  };
  return (
    <span {...other} className={`sessionStatus ${setStatus()}`}>
      {setStatus()}
    </span>
  );
};

export default SessionStatus;
