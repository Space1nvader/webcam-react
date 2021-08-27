import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { TextField, SelectField, PasswordField } from 'components/Form/';
import { SYSTEM_VALIDATION_SCHEMA } from 'constants/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { modelSystemFormSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty, filterChangesValues } from 'utils';
import ModelFormContainer from 'modules/ModelProfile/components/ModelFormContainer/index';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import { initialValues } from './initialValues';

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

const AccountForm = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, data } = useSelector(modelSystemFormSelector);
  const defaultValues = useSelector(staticModelDataSelector);
  const generateInitialValues = checkValueEmpty(data, initialValues);

  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    dispatch(setSubmitForm(id, filtredValues));
  };
  return (
    <div className={clsx(className)}>
      <ModelFormContainer
        title="Учетные 1 данные"
        className="account"
        id="account"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={SYSTEM_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        <FieldSet>
          <SelectField label="Имя сервера" name="genderId" options={defaultValues.gender} />
          <TextField name="login" label="Login" />
          <TextField name="serverId" label="ID сервера" />
          <PasswordField label="Email пароль" name="emailPassword" />
        </FieldSet>
        <FieldSet>
          <Button color="secondary" type="submit" className={classes.button} variant="contained">
            сохранить
          </Button>
          <Button className={classes.button} type="reset" variant="contained">
            отменить
          </Button>
        </FieldSet>
      </ModelFormContainer>
    </div>
  );
};

export default AccountForm;
