import React, { useState } from 'react';
import { Field } from 'formik';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 14,
    padding: '14px 24px',
    color: 'var(--gray-90)',
    backgroundColor: 'var(--gray-5)',
    borderRadius: 6
  }
});

const UploadFileField = (props) => {
  const [fd, setFd] = useState('');
  const { submitForm, name, icon, children, setFieldValue, ...other } = props;
  const classes = useStyles();
  const handleSubmitForm = (e) => {
    const { files } = e.target;
    const data = new FormData();
    if (files && files.length) {
      for (let i = 0; i < files.length; i += 1) {
        data.append('file[]', files[i]);
        setFd(data);
      }
      setFieldValue(name, data);
      submitForm();
    }
  };
  return (
    <Field {...props}>
      {({ field }) => (
        <>
          <input
            {...field}
            accept="image/*"
            className="uploadFile__input"
            name={name}
            id={name}
            value=""
            onChange={handleSubmitForm}
            multiple
            type="file"
          />
          <label htmlFor={name} className="uploadFile__label">
            <Button className={classes.button} component="span" {...other} startIcon={icon}>
              {children || 'Загрузить'}
            </Button>
          </label>
        </>
      )}
    </Field>
  );
};

export default UploadFileField;
