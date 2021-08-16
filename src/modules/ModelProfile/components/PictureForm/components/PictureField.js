import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import UserPhoto from 'components/UserPhoto';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPictureSelector } from 'redux/selectors/uploadPicture';
import { UploadPictureAction } from '../../../../../redux/actions/uploadPicture';

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
  <IconBtn component="span" className={className}>
    <AddRoundedIcon style={{ width: 50, height: 50, fill: 'var(--gray-20)' }} />
  </IconBtn>
);

const userPhotoForm = (image, className) => (
  <>
    <UserPhoto style={{ height: '100%', width: '100%' }} image={image} />
    <IconBtn component="span" className={className}>
      <AddRoundedIcon style={{ fill: '#fff' }} />
    </IconBtn>
  </>
);

const PictureField = (props) => {
  const { name, imagePath, setFieldValue, submitForm } = props;
  const [preview, setPreview] = useState(imagePath[name]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { picture, success } = useSelector(uploadPictureSelector);
  const generatePicture = (src) => {
    if (src) {
      return userPhotoForm(src, classes.absoluteBtn);
    }
    return addPhotoButton(classes.fullWidthBtn);
  };
  useEffect(() => {
    if (imagePath && imagePath[name]) setPreview(imagePath[name]);
  }, [imagePath]);

  // const handleSetPicturePreview = (e) => {
  //   const data = new FormData();
  //   const { files } = e.target;
  //   if (files && files.length) {
  //     const reader = new FileReader();
  //     reader.onload = (el) => {
  //       setPreview(el.target.result);
  //     };
  //     reader.readAsDataURL(files[0]);
  //     for (let i = 0; i < files.length; i += 1) {
  //       data.append(name, files[i]);
  //     }
  //     setFieldValue(name, data);
  //     submitForm();
  //   }
  // };
  const data = new FormData();
  const handleSetPicturePreview = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      for (let i = 0; i < files.length; i += 1) {
        data.append(name, files[i]);
      }
      dispatch(UploadPictureAction(data));
    }
  };
  useEffect(() => {
    if (success) {
      setFieldValue(name, picture[name]);
      submitForm();
      setPreview(picture[name]);
    }
  }, [success]);
  return (
    <>
      <Field {...props}>
        {({ field }) => (
          <input
            {...field}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleSetPicturePreview}
            value=""
            name={name}
            id={name}
            type="file"
          />
        )}
      </Field>
      <label htmlFor={name}>{generatePicture(preview)}</label>
    </>
  );
};
export default PictureField;
