import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';

const useStyles = makeStyles({
  field: {
    width: '48%',
    marginBottom: 18
  }
});
const DataForm = () => {
  const classes = useStyles();
  return (
    <form className="form">
      <h6 className="form__title">Личные данные</h6>
      <div className="form__set">
        <TextField className={classes.field} variant="outlined" label="Псевдоним (eng*)" />
      </div>
      <div className="form__set">
        <TextField className={classes.field} variant="outlined" label="Имя (рус*)" />
        <TextField className={classes.field} variant="outlined" label="Имя (eng*)" />
        <TextField className={classes.field} variant="outlined" label="Отчество (рус*)" />
        <TextField className={classes.field} variant="outlined" label="Отчество (eng*)" />
        <TextField className={classes.field} variant="outlined" label="Фамилия (рус*)" />
        <TextField className={classes.field} variant="outlined" label="Псевдоним (eng*)" />
      </div>
    </form>
  );
};

export default DataForm;
