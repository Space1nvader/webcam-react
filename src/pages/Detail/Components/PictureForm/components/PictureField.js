import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserPhoto from 'components/UserPhoto';
import IconButton from 'components/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

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

const PictureField = (props) => {
  const { name, initialValue, setFieldValue, submitForm } = props;
  const [preview, setPreview] = useState(initialValue[name]);
  const classes = useStyles();

  const generatePicture = (src) => {
    if (src) {
      return userPhotoForm(src, classes.absoluteBtn);
    }
    return addPhotoButton(classes.fullWidthBtn);
  };

  const handleSetPicturePreview = (e) => {
    const file = e.target.files;
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onload = (el) => {
        setPreview(el.target.result);
      };
      reader.readAsDataURL(file[0]);
      setFieldValue(name, file[0]);
      submitForm();
    }
  };

  return (
    <>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleSetPicturePreview}
        name={name}
        id={name}
        type="file"
      />
      <label htmlFor={name}>{generatePicture(preview)}</label>
    </>
  );
};

export default PictureField;
