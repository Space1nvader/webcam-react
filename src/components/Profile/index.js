import React from 'react';
import User from 'components/User';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SimpleMenu from 'components/SimpleMenu';
import './index.scss';

const Profile = (props) => {
  const { children, image, ...other } = props;
  return (
    <div className="profile">
      <User image={image} {...other}>
        {children}
      </User>
      <SimpleMenu
        options={['Profile', 'My account', 'Logout']}
        icon={<MoreHorizIcon style={{ fill: 'var(--indigo-30)' }} />}
      />
    </div>
  );
};

export default Profile;
