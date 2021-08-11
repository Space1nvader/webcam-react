import React, { useEffect } from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { personalSelector } from 'modules/ModelProfile/redux/selectors';
import { UploadPictureAction } from 'redux/actions/uploadPicture';
import { uploadPictureSelector } from 'redux/selectors/uploadPicture';
import { UpdatePersonalDataAction } from 'modules/ModelProfile/redux/personal/actions';
import PictureField from './components/PictureField';
import './index.scss';

const PictureForm = (props) => {
  const { imagePath, name, style, ...other } = props;
  const dispatch = useDispatch();
  // const { modelData } = useSelector(personalSelector);
  const { success } = useSelector(uploadPictureSelector);
  const data = useSelector(uploadPictureSelector);
  console.log(data);
  const onSubmit = (values) => {
    console.log('SUBMITTED', values[name]);
    dispatch(UploadPictureAction(values[name]));
  };
  // useEffect(() => {
  //   if (success)
  //     dispatch(UpdatePersonalDataAction({ id: modelData.id, data: { [name]: data[name] } }));
  // }, [success]);

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
