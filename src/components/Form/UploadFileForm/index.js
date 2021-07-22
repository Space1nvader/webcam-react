import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FormContainer } from 'components/Form/FormContainer';
import './index.scss';

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

const UploadFileButton = (props) => {
  const classes = useStyles();
  const { children, name, initialValue, icon, ...other } = props;

  const onSubmit = (values) => {
    console.log('SUBMIT', values);
  };
  return (
    <FormContainer enableReinitialize initialValues={initialValue} onSubmit={onSubmit}>
      {({ submitForm }) => (
        <>
          <input
            accept="image/*"
            className="uploadFile__input"
            name={name}
            id={name}
            onChange={submitForm}
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
    </FormContainer>
  );
};
export default UploadFileButton;
