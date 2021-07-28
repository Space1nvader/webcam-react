import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import PictureField from './components/PictureField';
import './index.scss';

const PictureForm = (props) => {
  const { imagePath, style, ...other } = props;

  const onSubmit = (values) => {
    console.log('SUBMIT', values);
  };
  return (
    <FormContainer enableReinitialize initialValues={imagePath} onSubmit={onSubmit} {...other}>
      {({ setFieldValue, submitForm }) => (
        <div className="pictureForm" style={style}>
          <PictureField {...props} submitForm={submitForm} setFieldValue={setFieldValue} />
        </div>
      )}
    </FormContainer>
  );
};

export default PictureForm;
