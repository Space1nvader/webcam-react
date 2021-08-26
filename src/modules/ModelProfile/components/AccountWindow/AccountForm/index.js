import React from 'react';
import { InputField } from 'components/Form/inputField';
import { SelectField } from 'components/Form/SelectField';
import { SYSTEM_VALIDATION_SCHEMA } from 'constants/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { modelSystemFormSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty } from 'utils/checkValueEmpty';
import { filterChangesValues } from 'utils/filterChangesValues';
import { TextArea } from 'components/Form/TextArea';
import ModelFormContainer from 'modules/ModelProfile/components/ModelFormContainer/index';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import { initialValues } from './initialValues';

const SystemForm = ({ className }) => {
  const dispatch = useDispatch();
  const { id, data } = useSelector(modelSystemFormSelector);
  const defaultValues = useSelector(staticModelDataSelector).model || '';
  const generateInitialValues = checkValueEmpty(data, initialValues);

  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    dispatch(setSubmitForm(id, filtredValues));
  };
  return (
    <div className={clsx(className)}>
      <FormTitle>Личные данные</FormTitle>
      <ModelFormContainer
        className="system"
        id="system"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={SYSTEM_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        <FieldSet divider>
          <InputField name="nickname" label="Псевдоним (eng*)" />
        </FieldSet>
        <FieldSet>
          <SelectField label="Тариф" name="tariffIdd" options={defaultValues.tariff} />
          <InputField name="contragent" label="Контрагент" />
          <TextArea name="comment" label="Комментарий" />
        </FieldSet>
      </ModelFormContainer>
    </div>
  );
};

export default SystemForm;
