import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import UserPhoto from 'components/UserPhoto';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPictureSelector } from 'redux/selectors/uploadPicture';
import { UploadPictureAction } from 'redux/actions/uploadPicture';
import { modelIdSelector } from 'modules/ModelProfile/redux/selectors';

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
  const { name, data, setFieldValue, submitForm } = props;
  const [preview, setPreview] = useState(data[name]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { modelId } = useSelector(modelIdSelector);
  const { picture, success } = useSelector(uploadPictureSelector);
  const generatePicture = (src) => {
    if (src) {
      return userPhotoForm(src, classes.absoluteBtn);
    }
    return addPhotoButton(classes.fullWidthBtn);
  };
  useEffect(() => {
    if (data && data[name]) setPreview(data[name]);
  }, [data, name]);
  const formData = new FormData();
  const handleSetPicturePreview = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      for (let i = 0; i < files.length; i += 1) {
        formData.append(name, files[i]);
      }
      dispatch(UploadPictureAction(formData));
    }
  };
  useEffect(() => {
    if (success) {
      setFieldValue(name, picture[name]);
      setPreview(picture[name]);
      if (modelId) {
        submitForm();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
