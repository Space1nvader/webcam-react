import React from 'react';
import DefaultImage from 'assets/img/user.png';
import { Link } from 'react-router-dom';
import './index.scss';

const User = (props) => {
  const { children, link, image, ...other } = props;

  return (
    <Link to={link?.length} className="user" {...other}>
      <img className="user__image" src={image?.length || DefaultImage} alt="" /> {children}
    </Link>
  );
};

export default User;
