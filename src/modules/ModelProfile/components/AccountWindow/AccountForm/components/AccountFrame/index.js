import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { modelAccountFormSelector, modelIdSelector } from 'modules/ModelProfile/redux/selectors';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import { makeStyles } from '@material-ui/core/styles';
import FieldSet from 'components/Form/FieldSet';
import { TextField, SelectField, PasswordField } from 'components/Form';
import ActiveToggle from 'components/ActiveToggle';
import IconBtn from 'components/IconBtn';
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
const errorsList = [
  { title: 'Тест ошибки', text: 'Сообщение об ошибке' },
  {
    title: 'Ошибка №21233',
    text: 'Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com'
  },
  { title: 'Ошибка №21233', text: 'Неверный пароль при регистрации на сайте jasmin.com' }
];

// const {errors} = useSelector(modelAccountFormSelector);

const AccountFrame = ({ defaultValues }) => {
  const [errors, setErrors] = useState(errorsList);
  const classes = useStyles();
  const { modelId } = useSelector(modelIdSelector);
  return (
    <div className="accountFrame">
      <div className="accountFrame__row">
        <div className="accountFrame__info">
          <h6 className="accountFrame__title">Chaturbate</h6>
          <div className="accountFrame__tags" />
        </div>
        <IconBtn>
          <DeleteRoundedIcon style={{ fill: 'var(--gray-20)' }} />
        </IconBtn>
      </div>
      <FieldSet style={{ marginBottom: 0 }}>
        <SelectField label="Имя сервера" name="genderId" options={defaultValues.gender} />
        <TextField name="login" label="Login" />
        <TextField name="serverId" label="ID сервера" />
        <PasswordField label="Email пароль" name="emailPassword" />
        <div className="accountFrame__formControls">
          <Button color="secondary" type="submit" className={classes.button} variant="contained">
            сохранить
          </Button>
          <Button className={classes.button} type="reset" variant="contained">
            отменить
          </Button>
        </div>
        <div className="accountFrame__controls">
          <div className="accountFrame__update">
            <IconBtn style={{ marginRight: 12 }}>
              <RefreshRoundedIcon style={{ fill: 'var(--gray-30)' }} />
            </IconBtn>
            Обновлен: 24.03.2021
          </div>
          <ActiveToggle id={modelId} />
        </div>

        {errors && <AccountErrors className="accountFrame__errors" errors={errors} />}
      </FieldSet>
    </div>
  );
};

export default AccountFrame;
