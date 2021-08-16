import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { uploadPictureSelector } from 'redux/selectors/uploadPicture';
import { CreateModelAction, UpdateModelAction } from 'modules/ModelProfile/redux/actions';
import PictureField from './components/PictureField';
import './index.scss';

const PictureForm = (props) => {
  const { imagePath, name, style, ...other } = props;
  const dispatch = useDispatch();
  const { modelData } = useSelector(modelSelector);
  const { picture, success } = useSelector(uploadPictureSelector);
  const onSubmit = (values) => {
    if (modelData) {
      dispatch(UpdateModelAction({ id: modelData.id, data: values }));
    }
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
