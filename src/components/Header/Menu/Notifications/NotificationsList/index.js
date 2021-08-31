import React from 'react';
import IconBtn from 'components/IconBtn';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const Item = (props) => {
  const { title, text } = props;
  return (
    <div className="notificationList">
      <div className="notificationList__head">
        <div className="notificationList__title">{title}</div>
        <IconBtn>
          <CloseRoundedIcon style={{ fill: 'var(--gray-30)' }} />
        </IconBtn>
      </div>
      <div className="notificationList__text">{text}</div>
    </div>
  );
};

const NotificationList = (props) => {
  const { data } = props;
  return (
    <div className="notificationList">
      {data.map((el) => (
        <Item title={el.title}>{el.text}</Item>
      ))}
    </div>
  );
};

export default NotificationList;
