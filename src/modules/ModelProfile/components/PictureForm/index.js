import React, { useEffect } from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateModelAction } from 'modules/ModelProfile/redux/actions';
import { modelIdSelector } from 'modules/ModelProfile/redux/selectors';
import PictureField from './components/PictureField';
import './index.scss';

const PictureForm = (props) => {
  const { data, style, ...other } = props;
  const { modelId } = useSelector(modelIdSelector);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    if (modelId) dispatch(UpdateModelAction({ id: modelId, data: values }));
  };
  return (
    <FormContainer
      enableReinitialize
      initialValues={{ avatar: data.avatar || '' }}
      onSubmit={onSubmit}
      {...other}
    >
      {({ setFieldValue, submitForm }) => (
        <div className="pictureForm" style={style}>
          <PictureField {...props} submitForm={submitForm} setFieldValue={setFieldValue} />
        </div>
      )}
    </FormContainer>
  );
};

export default PictureForm;
