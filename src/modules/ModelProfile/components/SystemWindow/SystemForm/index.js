import React from 'react';
import { TextField, SelectField, TextArea } from 'components/Form';
import FieldSet from 'components/Form/FieldSet';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { modelSystemFormSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { uploadPictureSelector } from 'redux/selectors/uploadPicture';
import { filterChangesValues, checkValueEmpty } from 'utils';
import ModelFormContainer from 'modules/ModelProfile/components/ModelFormContainer/index';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import { SYSTEM_VALIDATION_SCHEMA } from './validateSchema';
import { initialValues } from './initialValues';

const SystemForm = ({ className }) => {
  const dispatch = useDispatch();
  const { id, data } = useSelector(modelSystemFormSelector);
  const defaultValues = useSelector(staticModelDataSelector);
  const generateInitialValues = checkValueEmpty(data, initialValues);
  const { picture } = useSelector(uploadPictureSelector);
  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    dispatch(setSubmitForm(id, filtredValues));
  };
  return (
    <div className={clsx(className)}>
      {defaultValues && (
        <ModelFormContainer
          title="Системные данные"
          className="systemForm"
          id="systemForm"
          enableReinitialize
          initialValues={generateInitialValues}
          validationSchema={SYSTEM_VALIDATION_SCHEMA}
          onSubmit={onSubmit}
          payload={!id && picture}
        >
          <FieldSet style={{ marginBottom: 30 }} divider>
            <TextField style={{ marginBottom: 10 }} name="nickname" label="Псевдоним (eng*)" />
          </FieldSet>
          <FieldSet>
            <SelectField label="Тариф" name="tariffIdd" options={defaultValues.tariff} />
            <TextField name="contragent" label="Контрагент" />
            <TextArea style={{ width: '100%' }} name="comment" label="Комментарий" />
          </FieldSet>
        </ModelFormContainer>
      )}
    </div>
  );
};

export default SystemForm;
