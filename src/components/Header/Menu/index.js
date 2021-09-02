import React from 'react';
import clsx from 'clsx';
import Notifications from './Notifications';

const Menu = (props) => {
  const { className = '' } = props;
  return (
    <div className={clsx('menu', className)}>
      <Notifications />
    </div>
  );
};

export default Menu;
