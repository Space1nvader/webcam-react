import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormContainer } from 'components/Form/FormContainer';
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
import FormTitle from '../FormTitle';

const useStyles = makeStyles({
  button: {
    marginRight: 16,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 14,
    padding: '8px 24px',
    letterSpacing: '0.035em'
  }
});

const initialValues = {
  nickname: '',
  name: '',
  nameRus: '',
  patronymic: '',
  patronymicRus: '',
  surname: '',
  surnameRus: '',
  gender1: '',
  age: '',
  birthday: '',
  serialNumber: '',
  validatedAt: '',
  country: '',
  region: '',
  city: '',
  address: '',
  zipCode: '',
  phone: '',
  emailPassword: ''
};

const PersonalForm = ({ className }) => {
  const classes = useStyles();
  const onSubmit = (values) => {
    console.log('SUBMIT', values);
  };
  const data = useSelector(modelSelector);
  const defaultValues = useSelector(staticModelDataSelector).model || '';
  return (
    <div className={clsx('form', className)}>
      <FormTitle>Личные данные</FormTitle>

      <FormContainer
        className="settings"
        enableReinitialize
        initialValues={checkValueEmpty(data, initialValues)}
        validationSchema={PROFILE_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {() => (
          <>
            <InputField name="nickname" type="text" label="Псевдоним (eng*)" />
            <FieldSet divider>
              <InputField className="form__field" name="nameRus" type="text" label="Имя (рус*)" />
              <InputField className="form__field" name="name" type="text" label="Имя (eng*)" />
              <InputField
                className="form__field"
                name="patronymicRus"
                type="text"
                label="Отчество (рус)"
              />
              <InputField
                className="form__field"
                name="patronymic"
                type="text"
                label="Отчество (eng*)"
              />
              <InputField
                className="form__field"
                name="surnameRus"
                type="text"
                label="Фамилия (рус)"
              />
              <InputField
                className="form__field"
                name="surname"
                type="text"
                label="Фамилия (eng*)"
              />
            </FieldSet>
            <FieldSet divider>
              <SelectField
                className="form__field"
                label="Пол"
                name="genderId"
                options={defaultValues.gender}
              />
              <InputField
                className="form__field"
                label="Отображаемый возраст"
                type="Nubmer"
                name="age"
              />
            </FieldSet>
            <FieldSet divider title="Паспортные данные">
              <DateField
                className="form__field"
                name="birthday"
                type="text"
                label="Дата рождения"
              />
              <InputField
                className="form__field"
                name="serialNumber"
                type="text"
                label="Серия номер"
              />
            </FieldSet>
            <FieldSet>
              <DateField
                className="form__field"
                name="validatedAt"
                type="text"
                label="Срок действия"
              />
              <SelectField
                className="form__field"
                label="Пол"
                name="countryId"
                options={defaultValues.country}
              />
              <InputField className="form__field" name="region" type="text" label="Регион" />
              <InputField className="form__field" name="city" type="text" label="Город" />
              <InputField className="form__field" name="address" type="text" label="Адрес" />
            </FieldSet>
            <FieldSet divider>
              <InputField
                className="form__field"
                label="Почтовый индекс"
                type="text"
                name="zipCode"
              />
              <InputField className="form__field" label="Телефон" type="phone" name="phone" />
              <PasswordField className="form__field" label="Email пароль" name="emailPassword" />
            </FieldSet>
            <Button color="secondary" type="submit" className={classes.button} variant="contained">
              сохранить
            </Button>
            <Button className={classes.button} variant="contained">
              отменить
            </Button>
          </>
        )}
      </FormContainer>
    </div>
  );
};

export default PersonalForm;
