import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { UploadPictureAction } from 'redux/actions/uploadPicture';
import PictureField from './components/PictureField';
import './index.scss';

const PictureForm = (props) => {
  const { imagePath, name, style, ...other } = props;
  const dispatch = useDispatch();
  const { modelData, isLoading, success } = useSelector(modelSelector);
  const onSubmit = (values) => {
    console.log('SUBMITTED', values[name]);
    dispatch(UploadPictureAction(values[name]));
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
