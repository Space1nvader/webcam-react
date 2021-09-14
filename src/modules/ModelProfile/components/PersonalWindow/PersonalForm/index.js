import React from 'react';
import {
  TextField,
  TranslatedTextField,
  SelectField,
  PasswordField,
  DateField
} from 'components/Form';
import { PROFILE_VALIDATION_SCHEMA } from 'constants/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { modelPersonalFormSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { filterChangesValues, checkValueEmpty } from 'utils';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import ModelFormContainer from 'modules/ModelProfile/components/ModelFormContainer';
import { initialValues } from './initialValues';

const PersonalForm = ({ className }) => {
  const { id, data } = useSelector(modelPersonalFormSelector);
  const dispatch = useDispatch();
  const defaultValues = useSelector(staticModelDataSelector);
  const generateInitialValues = checkValueEmpty(data, initialValues);
  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    dispatch(setSubmitForm(id, filtredValues));
  };
  return (
    <div className={clsx(className)}>
      <FormTitle>Личные данные</FormTitle>
      <ModelFormContainer
        className="personalForm"
        id="personalForm"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={PROFILE_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        <FieldSet divider>
          <TextField name="nameRus" label="Имя (рус*)" />
          <TranslatedTextField translateFrom="nameRus" name="name" label="Имя (eng*)" />
          <TextField name="patronymicRus" label="Отчество (рус)" />
          <TranslatedTextField
            translateFrom="patronymicRus"
            name="patronymic"
            label="Отчество (eng*)"
          />
          <TextField name="surnameRus" label="Фамилия (рус)" />
          <TranslatedTextField translateFrom="surnameRus" name="surname" label="Фамилия (eng*)" />
        </FieldSet>
        <FieldSet divider>
          <SelectField label="Пол" name="genderId" options={defaultValues.gender} />
          <TextField label="Отображаемый возраст" type="number" name="age" />
        </FieldSet>
        <FieldSet divider title="Паспортные данные">
          <DateField name="birthday" label="Дата рождения" />
          <TextField name="serialNumber" type="text" label="Серия номер" />
          <DateField name="validatedAt" label="Срок действия" />
          <SelectField label="Страна" name="countryId" options={defaultValues.country} />
          <TextField name="region" type="text" label="Регион" />
          <TextField name="city" type="text" label="Город" />
          <TextField name="address" type="text" label="Адрес" />
        </FieldSet>
        <FieldSet>
          <TextField label="Почтовый индекс" name="zipCode" />
          <TextField label="Телефон" type="phone" name="phone" />
          <TextField label="Email" type="email" name="email" />
          <PasswordField label="Email пароль" name="emailPassword" />
        </FieldSet>
      </ModelFormContainer>
    </div>
  );
};

export default PersonalForm;
