import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { modelIdSelector } from 'modules/ModelProfile/redux/selectors';
import { PostDocumentAction } from 'modules/ModelProfile/redux/actions';
import UploadFileField from './components/UploadFileField';
import './index.scss';

const UploadFileForm = (props) => {
  const { name, children, className } = props;
  const dispatch = useDispatch();
  const { modelId: id } = useSelector(modelIdSelector);
  const onSubmit = (data) => {
    data[name].append('modelId', id);
    dispatch(PostDocumentAction(data[name]));
  };
  const initialValues = {
    [name]: ''
  };
  return (
    <FormContainer
      className={className}
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, submitForm }) => (
        <UploadFileField {...props} submitForm={submitForm} setFieldValue={setFieldValue}>
          {children}
        </UploadFileField>
      )}
    </FormContainer>
  );
};
export default UploadFileForm;
