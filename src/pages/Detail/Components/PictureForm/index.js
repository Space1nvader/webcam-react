import React, { useState } from 'react';
import UserPhoto from 'components/UserPhoto';
import IconButton from 'components/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';

const useStyles = makeStyles({
  absoluteBtn: {
    zIndex: 2,
    backgroundColor: 'var(--red-60)',
    height: 40,
    width: 40,
    position: 'absolute',
    right: 14,
    bottom: 8,
    boxShadow: '0px 2px 4px rgba(156, 43, 35, 0.2), 0px 4px 8px rgba(244, 67, 54, 0.2)',
    '&:hover': {
      backgroundColor: 'var(--red-60)'
    }
  },
  fullWidthBtn: {
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--gray-0)'
  }
});

const addPhotoButton = (className) => (
  <IconButton component="span" className={className}>
    <AddRoundedIcon style={{ width: 50, height: 50, fill: 'var(--gray-20)' }} />
  </IconButton>
);

const userPhotoForm = (image, className) => (
  <>
    <UserPhoto style={{ height: '100%', width: '100%' }} image={image} />
    <IconButton component="span" className={className}>
      <AddRoundedIcon style={{ fill: '#fff' }} />
    </IconButton>
  </>
);

const PictureForm = (props) => {
  const { image = null, name, ...other } = props;
  const classes = useStyles();
  const [preview, setPreview] = useState(image);
  const generatePicture = (src) => {
    if (src) {
      return userPhotoForm(src, classes.absoluteBtn);
    }
    return addPhotoButton(classes.fullWidthBtn);
  };
  const handleSetPicturePreview = (e) => {
    const input = e.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (el) => setPreview(el.target.result);
      reader.readAsDataURL(input.files[0]);
    }
  };
  return (
    <form action="" className="pictureForm" {...other}>
      <input
        accept="image/*"
        className="pictureForm__input"
        style={{ display: 'none' }}
        onChange={handleSetPicturePreview}
        name={name}
        id={name}
        type="file"
      />
      <label htmlFor={name} className="pictureForm__label">
        {generatePicture(preview)}
      </label>
    </form>
  );
};

export default PictureForm;
