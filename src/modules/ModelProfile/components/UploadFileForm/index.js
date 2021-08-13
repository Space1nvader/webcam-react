import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { CreateModelAction, PostDocumentAction } from 'modules/ModelProfile/redux/actions';
import UploadFileField from './components/UploadFileField';
import './index.scss';

const UploadFileForm = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const { modelData, isLoading, success } = useSelector(modelSelector);

  const onSubmit = ({ files }) => {
    if (modelData) {
      files.append('modelId', modelData.id);
      dispatch(PostDocumentAction(files));
    } else {
      dispatch(CreateModelAction(files));
    }
  };

  return (
    <FormContainer enableReinitialize initialValues={{ [name]: '' }} onSubmit={onSubmit}>
      {({ setFieldValue, submitForm }) => (
        <UploadFileField {...props} submitForm={submitForm} setFieldValue={setFieldValue} />
      )}
    </FormContainer>
  );
};
export default UploadFileForm;
