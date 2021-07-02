import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import './index.scss';

const User = (props) => {
  const { children, link, image, ...other } = props;

  return (
    <Link to={link?.length && link} className="user" {...other}>
      {image ? (
        <img className="user__image" src={image} alt="" />
      ) : (
        <AccountCircleIcon style={{ height: 40, width: 40, marginRight: 8 }} />
      )}
      {children}
    </Link>
  );
};

export default User;
