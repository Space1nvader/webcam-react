import React from 'react';
import './index.scss';

const SessionStatus = (props) => {
  const { value, ...other } = props;

  const setStatus = () => {
    switch (value) {
      case 'online':
        return 'online';

      default:
        return 'offline';
    }
  };
  return (
    <span {...other} className={`sessionStatus ${setStatus()}`}>
      {setStatus()}
    </span>
  );
};

export default SessionStatus;
