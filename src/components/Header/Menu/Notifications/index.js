import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge } from '@material-ui/core';
import SimplePopup from 'components/SimplePopup';
import NotificationMenu from './NotificationMenu';
import './index.scss';

const Notifications = () => (
  <div className="notifications">
    <SimplePopup
      iconSize="medium"
      icon={
        <Badge color="secondary" variant="dot">
          <NotificationsIcon />
        </Badge>
      }
    >
      <NotificationMenu />
    </SimplePopup>
  </div>
);

export default Notifications;
