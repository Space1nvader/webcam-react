import React from 'react';
import { InputField } from 'components/Form/inputField';
import { DateField } from 'components/Form/DateField';
import { SelectField } from 'components/Form/SelectField';
import { PROFILE_VALIDATION_SCHEMA } from 'constants/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import { PasswordField } from 'components/Form/PasswordField';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty } from 'untils/checkValueEmpty';
import { filterChangesValues } from 'untils/filterChangesValues';
import { initialValues } from './initialValues';
import FormTitle from '../FormTitle';
import setSubmitForm from '../../setSubmitForm';
import ModelFormContainer from '../ModelFormContainer';

const PersonalForm = ({ className }) => {
  const { modelData } = useSelector(modelSelector);

  const defaultValues = useSelector(staticModelDataSelector).model || '';
  const generateInitialValues =
    modelData && modelData?.personal
      ? checkValueEmpty(modelData.personal, initialValues)
      : initialValues;

  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    setSubmitForm(modelData.id, filtredValues);
  };
  return (
    <div className={clsx(className)}>
      <FormTitle>Личные данные</FormTitle>
      <ModelFormContainer
        className="settings"
        id="settings"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={PROFILE_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        <FieldSet divider>
          <InputField name="nameRus" label="Имя (рус*)" />
          <InputField name="name" label="Имя (eng*)" />
          <InputField name="patronymicRus" label="Отчество (рус)" />
          <InputField name="patronymic" label="Отчество (eng*)" />
          <InputField name="surnameRus" label="Фамилия (рус)" />
          <InputField name="surname" label="Фамилия (eng*)" />
        </FieldSet>
        <FieldSet divider>
          <SelectField label="Пол" name="genderId" options={defaultValues.gender} />
          <InputField label="Отображаемый возраст" type="number" name="age" />
        </FieldSet>
        <FieldSet divider title="Паспортные данные">
          <DateField name="birthday" label="Дата рождения" />
          <InputField name="serialNumber" type="text" label="Серия номер" />
          <DateField name="validatedAt" label="Срок действия" />
          <SelectField label="Страна" name="countryId" options={defaultValues.country} />
          <InputField name="region" type="text" label="Регион" />
          <InputField name="city" type="text" label="Город" />
          <InputField name="address" type="text" label="Адрес" />
        </FieldSet>
        <FieldSet>
          <InputField label="Почтовый индекс" name="zipCode" />
          <InputField label="Телефон" type="phone" name="phone" />
          <InputField label="Email" type="email" name="email" />
          <PasswordField label="Email пароль" name="emailPassword" />
        </FieldSet>
      </ModelFormContainer>
    </div>
  );
};

export default PersonalForm;
