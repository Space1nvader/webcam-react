import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './index.scss';

const UserPhoto = (props) => {
  const { image, ...other } = props;
  return (
    <div className="userPhoto" {...other}>
      {image ? (
        <img className="userPhoto__image" src={image} alt="" />
      ) : (
        <AccountCircleIcon style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      )}
    </div>
  );
};

export default UserPhoto;
