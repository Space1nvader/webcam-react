import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import UploadFileField from './components/UploadFileField';
import './index.scss';

const UploadFileForm = (props) => {
  const { initialValue } = props;

  const { modelData, isLoading, success } = useSelector(modelSelector);
  console.log(modelData);
  const onSubmit = ({ files }) => {
    console.log('SUBMIT', files);
  };

  return (
    <FormContainer enableReinitialize initialValues={initialValue} onSubmit={onSubmit}>
      {({ setFieldValue, submitForm }) => (
        <UploadFileField {...props} submitForm={submitForm} setFieldValue={setFieldValue} />
      )}
    </FormContainer>
  );
};
export default UploadFileForm;
