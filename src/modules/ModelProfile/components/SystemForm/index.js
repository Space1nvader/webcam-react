import React from 'react';
import { InputField } from 'components/Form/inputField';
import { SelectField } from 'components/Form/SelectField';
import { SYSTEM_VALIDATION_SCHEMA } from 'constants/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty } from 'untils/checkValueEmpty';
import { filterChangesValues } from 'untils/filterChangesValues';
import { TextArea } from 'components/Form/TextArea';
import { initialValues } from './initialValues';
import FormTitle from '../FormTitle';
import setSubmitForm from '../../setSubmitForm';
import ModelFormContainer from '../ModelFormContainer/index';

const SystemForm = ({ className }) => {
  const { modelData } = useSelector(modelSelector);
  const defaultValues = useSelector(staticModelDataSelector).model || '';
  const generateInitialValues =
    modelData && modelData?.system
      ? checkValueEmpty(modelData.system, initialValues)
      : initialValues;

  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    setSubmitForm(modelData.id, filtredValues);
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
