import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import PictureField from './components/PictureField';
import './index.scss';

const PictureForm = (props) => {
  const { initialValue, ...other } = props;

  const onSubmit = (values) => {
    console.log('SUBMIT', values);
  };
  return (
    <FormContainer enableReinitialize initialValues={initialValue} onSubmit={onSubmit} {...other}>
      {({ setFieldValue, submitForm }) => (
        <div className="pictureForm" {...other}>
          <PictureField {...props} submitForm={submitForm} setFieldValue={setFieldValue} />
        </div>
      )}
    </FormContainer>
  );
};

export default PictureForm;
