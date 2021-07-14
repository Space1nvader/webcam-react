import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormContainer } from 'components/Form/FormContainer';
import { InputField } from 'components/Form/inputField';
import { SelectField } from 'components/Form/SelectField';
import * as Yup from 'yup';
import FormTitle from '../FormTitle';

const validSchema = Yup.object().shape({
  name: Yup.string().required('очень')
});

const useStyles = makeStyles({
  button: {
    marginRight: 16,
    fontWeight: 700,
    letterSpacing: '0.035em'
  },
  formControl: {
    width: '48%'
  }
});

const MainDataForm = (props) => {
  const { className, ...other } = props;
  const classList = `form ${className || ''}`;
  const classes = useStyles();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={classList}>
      <FormTitle>Основные данные</FormTitle>

      <FormContainer
        className="settings"
        // enableReinitialize
        initialValues={{ test: '' }}
        validationSchema={validSchema}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <>
            <div className="form__set form__set--divider">
              <InputField name="name" type="text" label="Рассовая пренодлежность" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              {/* TODO когда появится бекенд для формы */}
              {/* <TextField className={classes.field} variant="outlined" label="Имя (рус*)" />
                <TextField className={classes.field} variant="outlined" label="Имя (eng*)" />
                <TextField className={classes.field} variant="outlined" label="Отчество (рус*)" />
                <TextField className={classes.field} variant="outlined" label="Отчество (eng*)" />
                <TextField className={classes.field} variant="outlined" label="Фамилия (рус*)" />
                <TextField className={classes.field} variant="outlined" label="Псевдоним (eng*)" /> */}
            </div>
            <div className="form__set form__set--divider">
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
            </div>
            <div className="form__set form__set--divider">
              <span className="form__setTitle">Паспортные данные</span>
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
            </div>
            <div className="form__set">
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
              <InputField name="name-eng" type="text" label="Имя (eng*)" />
            </div>
            <Button color="secondary" className={classes.button} variant="contained">
              сохранить
            </Button>
            <Button className={classes.button} type="submit" variant="contained">
              отменить
            </Button>
          </>
        )}
      </FormContainer>
    </div>
  );
};

export default MainDataForm;
