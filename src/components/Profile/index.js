import React from 'react';
import User from 'components/User';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './index.scss';

const Profile = (props) => {
  const { children, image, ...other } = props;
  return (
    <div className="profile">
      <User image={image} {...other}>
        {children}
      </User>
      <IconButton>
        <MoreHorizIcon style={{ fill: 'var(--indigo-30)' }} />
      </IconButton>
    </div>
  );
};

export default Profile;
