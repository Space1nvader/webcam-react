import React from 'react';
import IconBtn from 'components/IconBtn';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import './index.scss';

const Item = (props) => {
  const { title, children } = props;
  return (
    <div className="notificationItem">
      <div className="notificationItem__head">
        <div className="notificationItem__title">{title}</div>
        <IconBtn className="notificationItem__close">
          <CloseRoundedIcon style={{ fill: 'var(--gray-30)' }} />
        </IconBtn>
      </div>
      <div className="notificationItem__text">{children}</div>
    </div>
  );
};

const NotificationList = (props) => {
  const { data } = props;
  const generateOutput = () => {
    if (data && data.length) {
      return data.map((el) => <Item title={el.title}>{el.text}</Item>);
    }
    return <div className="notificationList__emptyMsg">Список пуст</div>;
  };
  return <div className="notificationList">{generateOutput()}</div>;
};

export default NotificationList;