import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FieldSet from 'components/Form/FieldSet';
import { TextField, SelectField, PasswordField } from 'components/Form';
import ActiveToggle from 'components/ActiveToggle';
import AccountError from '../AccountError';
import './index.scss';

const useStyles = makeStyles({
  button: {
    marginRight: 16,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 14,
    padding: '8px 24px',
    width: 150,
    letterSpacing: '0.035em'
  }
});
const AccountFrame = ({ defaultValues }) => {
  const classes = useStyles();
  return (
    <div className="Account">
      <FieldSet>
        <h6 className="account__title">Chaturbate</h6>
        <div className="account__tags" />
      </FieldSet>
      <FieldSet>
        <SelectField label="Имя сервера" name="genderId" options={defaultValues.gender} />
        <TextField name="login" label="Login" />
        <TextField name="serverId" label="ID сервера" />
        <PasswordField label="Email пароль" name="emailPassword" />
      </FieldSet>
      <FieldSet>
        <div className="account__formControls">
          <Button color="secondary" type="submit" className={classes.button} variant="contained">
            сохранить
          </Button>
          <Button className={classes.button} type="reset" variant="contained">
            отменить
          </Button>
        </div>
        <div className="account__updateControls">
          <ActiveToggle />
        </div>
        <div className="account__errors">
          <AccountError />
        </div>
      </FieldSet>
    </div>
  );
};

export default AccountFrame;
