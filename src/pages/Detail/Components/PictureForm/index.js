import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import PictureField from './components/PictureField';
import './index.scss';

const PictureForm = (props) => {
  const { initialValue } = props;

  const onSubmit = (values) => {
    console.log('SUBMIT', values);
  };
  return (
    <FormContainer enableReinitialize initialValues={initialValue} onSubmit={onSubmit}>
      {({ setFieldValue, submitForm }) => (
        <div className="pictureForm">
          <PictureField {...props} submitForm={submitForm} setFieldValue={setFieldValue} />
        </div>
      )}
    </FormContainer>
  );
};

export default PictureForm;
