import React from 'react';
import UserPhoto from 'components/UserPhoto';
import IconButton from 'components/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './index.scss';

const PictureForm = (props) => {
  const { image, ...other } = props;
  return (
    <form action="" className="pictureForm" {...other}>
      <UserPhoto style={{ height: '100%', width: '100%' }} image={image} />
      <IconButton
        style={{
          backgroundColor: 'var(--red-60)',
          height: 40,
          width: 40,
          position: 'absolute',
          right: 14,
          bottom: 8,
          boxShadow: ' 0px 2px 4px rgba(156, 43, 35, 0.2), 0px 4px 8px rgba(244, 67, 54, 0.2)'
        }}
      >
        <AddRoundedIcon style={{ fill: '#fff' }} />
      </IconButton>
    </form>
  );
};

export default PictureForm;
