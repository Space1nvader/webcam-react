import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { modelAccountFormSelector } from 'modules/ModelProfile/redux/selectors';
import { makeStyles } from '@material-ui/core/styles';
import FieldSet from 'components/Form/FieldSet';
import { TextField, SelectField, PasswordField } from 'components/Form';
import ActiveToggle from 'components/ActiveToggle';
import AccountErrors from '../AccontErrors';
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
const errors = [
  { title: 'Тест ошибки', text: 'Сообщение об ошибке' },
  {
    title: 'Ошибка №21233',
    text: 'Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com'
  },
  { title: 'Ошибка №21233', text: 'Неверный пароль при регистрации на сайте jasmin.com' }
];
// const {errors} = useSelector(modelAccountFormSelector);
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

        {errors && <AccountErrors className="account__errors" errors={errors} />}
      </FieldSet>
    </div>
  );
};

export default AccountFrame;
