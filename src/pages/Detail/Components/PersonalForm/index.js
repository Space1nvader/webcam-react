import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormContainer } from 'components/Form/FormContainer';
import { InputField } from 'components/Form/inputField';
import { DateField } from 'components/Form/DateField';
import { SelectField } from 'components/Form/SelectField';
import { PROFILE_VALIDATION_SCHEMA } from 'functions/validateSchema';
import * as Yup from 'yup';
import FormTitle from '../FormTitle';
import './index.scss';

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
    console.log(values);
  };
  return (
    <div className={classList}>
      <FormTitle>Личные данные</FormTitle>

      <FormContainer
        className="settings"
        // enableReinitialize
        initialValues={{}}
        validationSchema={PROFILE_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {({ isValid }) => {
          console.log(isValid);
          return (
            <>
              <InputField name="nickname" type="text" label="Псевдоним (eng*)" />
              <div className="form__set form__set--divider">
                <InputField className="form__field" name="name" type="text" label="Имя (рус*)" />
                <InputField
                  className="form__field"
                  name="name_eng"
                  type="text"
                  label="Имя (eng*)"
                />
                <InputField
                  className="form__field"
                  name="secondname"
                  type="text"
                  label="Отчество (рус)"
                />
                <InputField
                  className="form__field"
                  name="secondname_eng"
                  type="text"
                  label="Отчество (eng*)"
                />
                <InputField
                  className="form__field"
                  name="surname"
                  type="text"
                  label="Фамилия (рус)"
                />
                <InputField
                  className="form__field"
                  name="surname_eng"
                  type="text"
                  label="Фамилия (eng*)"
                />
              </div>
              <div className="form__set form__set--divider">
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
              </div>
              <div className="form__set form__set--divider">
                <span className="form__setTitle">Паспортные данные</span>
                <DateField
                  className="form__field"
                  name="birthday"
                  type="text"
                  label="Дата рождения"
                />
                <InputField
                  className="form__field"
                  name="doc-series"
                  type="text"
                  label="Серия номер"
                />
              </div>
              <div className="form__set">
                <InputField
                  className="form__field"
                  name="doc-term"
                  type="text"
                  label="Срок действия"
                />
                <InputField
                  className="form__field"
                  name="doc-nubmer"
                  type="text"
                  label="Номер документа"
                />
                <InputField className="form__field" name="country" type="text" label="Страна" />
                <InputField className="form__field" name="region" type="text" label="Регион" />
                <InputField className="form__field" name="city" type="text" label="Город" />
                <InputField className="form__field" name="adress" type="text" label="Адрес" />
              </div>
              <Button color="secondary" className={classes.button} variant="contained">
                сохранить
              </Button>
              <Button className={classes.button} type="submit" variant="contained">
                отменить
              </Button>
            </>
          );
        }}
      </FormContainer>
    </div>
  );
};

export default PersonalForm;
