import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import './index.scss';

const useStyles = makeStyles({
  field: {
    width: '48%',
    marginBottom: 26,
    '& input': {
      padding: 12 
    },
    '& label': {
      transform:' translate(14px,14px) scale(1)'
    }
  },
  button: {
    marginRight: 16,
    fontWeight: 700,
    letterSpacing: '0.035em'
  }
});
const DataForm = (props) => {
  const { className, ...other } = props;
  const classList = `form ${className || ''}`
  const classes = useStyles();
  return (
    <form className={classList}> 
      <h6 className="form__title">Личные данные</h6>
        <TextField className={classes.field} variant="outlined" label="Псевдоним (eng*)" />
      
      <div className="form__set form__set--divider">
        <TextField className={classes.field} variant="outlined" label="Имя (рус*)" />
        <TextField className={classes.field} variant="outlined" label="Имя (eng*)" />
        <TextField className={classes.field} variant="outlined" label="Отчество (рус*)" />
        <TextField className={classes.field} variant="outlined" label="Отчество (eng*)" />
        <TextField className={classes.field} variant="outlined" label="Фамилия (рус*)" />
        <TextField className={classes.field} variant="outlined" label="Псевдоним (eng*)" />
      </div>
      <div className="form__set form__set--divider">
        <TextField className={classes.field} variant="outlined" label="Пол" />
        <TextField className={classes.field} variant="outlined" label="Отображаемый возраст" />
      </div>
      <div className="form__set form__set--divider">
        <span className="form__setTitle">Паспортные данные</span>
        <TextField className={classes.field} variant="outlined" label="Дата рождения" />
        <TextField className={classes.field} variant="outlined" label="Серия номер" />
      </div>
      <div className="form__set">
        <TextField className={classes.field} variant="outlined" label="Дата рождения" />
        <TextField className={classes.field} variant="outlined" label="Серия номер" />
        <TextField className={classes.field} variant="outlined" label="Дата рождения" />
        <TextField className={classes.field} variant="outlined" label="Серия номер" />
      </div>
      <Button color="secondary" className={classes.button} variant="contained">сохранить</Button>
      <Button  className={classes.button} variant="contained">отменить</Button>
    </form>
  );
};

export default DataForm;
