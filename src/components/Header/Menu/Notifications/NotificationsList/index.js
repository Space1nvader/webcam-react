import React, { useState } from 'react';
import IconBtn from 'components/IconBtn';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './index.scss';

// TODO: SET CHCKED ON CLICK

const Item = (props) => {
  const { title, children, checked, ...other } = props;
  // TODO: CHECKED ERRORS
  const [isChecked, setChecked] = useState(checked);
  const setErrorChecked = () => {
    console.log(checked);
    return false;
  };
  return (
    <div className="notificationItem" {...other}>
      <div className="notificationItem__head">
        <div className="notificationItem__title">{title}</div>
        <IconBtn onClick={setErrorChecked} className="notificationItem__close">
          <CloseRoundedIcon style={{ fill: 'var(--gray-30)' }} />
        </IconBtn>
      </div>
      <div className="notificationItem__text">{children}</div>
    </div>
  );
};

const NotificationList = (props) => {
  const { id, data } = props;
  const generateNotifications = () => {
    if (data && data.length) {
      return data.map((el) =>
        el.errors.map((message, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Item checked={message.checked} key={`${message.title}-${index}`} title={message.title}>
            {message.text}
          </Item>
        ))
      );
    }
    return <div className="notificationList__emptyMsg">Список пуст</div>;
  };
  return <div className="notificationList">{generateNotifications()}</div>;
};

export default NotificationList;
