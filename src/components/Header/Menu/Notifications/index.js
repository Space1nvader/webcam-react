import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconBtn from 'components/IconBtn';
import NotificationMenu from './NotificationMenu';
import './index.scss';

const Notifications = () => (
  <div className="notifications">
    <IconBtn>
      <NotificationsIcon />
    </IconBtn>
    <NotificationMenu />
  </div>
);

export default Notifications;
