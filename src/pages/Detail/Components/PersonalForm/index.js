import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormContainer } from 'components/Form/FormContainer';
import { InputField } from 'components/Form/inputField';
import { DateField } from 'components/Form/DateField';
import { SelectField } from 'components/Form/SelectField';
import { PROFILE_VALIDATION_SCHEMA } from 'functions/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import FormTitle from '../FormTitle';

const useStyles = makeStyles({
  button: {
    marginRight: 16,
    fontWeight: 700,
    letterSpacing: '0.035em'
  }
});

const PersonalForm = (props) => {
  const { className, ...other } = props;
  const classList = `form ${className || ''}`;
  const classes = useStyles();
  const onSubmit = (values) => {
    console.log('SUBMIT', values);
  };
  return (
    <div className={classList}>
      <FormTitle>Личные данные</FormTitle>

      <FormContainer
        className="settings"
        enableReinitialize
        initialValues={{}}
        validationSchema={PROFILE_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {({ isValid, errors, validateForm }) => (
          <form>
            <InputField name="nickname" type="text" label="Псевдоним (eng*)" required />
            <FieldSet divider>
              <InputField
                className="form__field"
                name="name"
                type="text"
                label="Имя (рус*)"
                required
              />
              <InputField
                className="form__field"
                name="name_eng"
                type="text"
                label="Имя (eng*)"
                required
              />
              <InputField
                className="form__field"
                name="secondname"
                type="text"
                label="Отчество (рус)"
                required
              />
              <InputField
                className="form__field"
                name="secondname_eng"
                type="text"
                label="Отчество (eng*)"
                required
              />
              <InputField
                className="form__field"
                name="surname"
                type="text"
                label="Фамилия (рус)"
                required
              />
              <InputField
                className="form__field"
                name="surname_eng"
                type="text"
                label="Фамилия (eng*)"
                required
              />
            </FieldSet>
            <FieldSet divider>
              <SelectField
                className="form__field"
                label="Пол"
                name="sex"
                options={[
                  { title: 'Мужской', value: 'Мужской' },
                  { title: 'Женский', value: 'Женский' }
                ]}
              />
              <InputField
                className="form__field"
                label="Отображаемый возраст"
                type="Nubmer"
                name="old"
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
                name="doc_series"
                type="text"
                label="Серия номер"
              />
            </FieldSet>
            <FieldSet>
              <DateField
                className="form__field"
                name="doc_term"
                type="text"
                label="Срок действия"
              />
              <InputField
                className="form__field"
                name="doc_nubmer"
                type="text"
                label="Номер документа"
              />
              <InputField className="form__field" name="country" type="text" label="Страна" />
              <InputField className="form__field" name="region" type="text" label="Регион" />
              <InputField className="form__field" name="city" type="text" label="Город" />
              <InputField className="form__field" name="adress" type="text" label="Адрес" />
            </FieldSet>
            <FieldSet divider>
              <InputField
                className="form__field"
                label="Почтовый индекс"
                type="number"
                name="zip"
              />
              <InputField className="form__field" label="Телефон" type="phone" name="phone" />
              <InputField className="form__field" label="Email" type="email" name="email" />
              <InputField
                className="form__field"
                label="Email пароль"
                type="password"
                name="password"
              />
            </FieldSet>
            <Button
              color="secondary"
              type="submit"
              onClick={() => {
                validateForm();
              }}
              className={classes.button}
              variant="contained"
            >
              сохранить
            </Button>
            <Button className={classes.button} variant="contained">
              отменить
            </Button>
          </form>
        )}
      </FormContainer>
    </div>
  );
};

export default PersonalForm;
