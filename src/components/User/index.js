import React from 'react';
import UserPhoto from 'components/UserPhoto';
import { Link } from 'react-router-dom';
import './index.scss';

const User = (props) => {
  const { children, link, image, ...other } = props;

  return (
    <Link to={link?.length && link} className="user" {...other}>
      <UserPhoto style={{ marginRight: 8, height: 40, width: 40 }} image={image} />
      {children}
    </Link>
  );
};

export default User;
