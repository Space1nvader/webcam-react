import React from 'react';
import SERVICE_API from 'api';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { personalSelector } from 'modules/ModelProfile/redux/selectors';
import UploadFileField from './components/UploadFileField';
import './index.scss';

const UploadFileForm = (props) => {
  const { initialValue } = props;

  const { modelData, isLoading, success } = useSelector(personalSelector);
  console.log(modelData);
  const onSubmit = ({ files }) => {
    console.log('SUBMIT', files);
    try {
      const data = SERVICE_API.Model.attachFile({ modelId: modelData.id, files });
      console.log('SUCCESS', data);
    } catch (err) {
      console.log('ERR', err);
    }
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
