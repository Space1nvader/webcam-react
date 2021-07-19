import React, { useState } from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from 'components/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 30,
    '& input': {
      padding: 12,
      borderRarius: '12px'
    },
    '& label': {
      transform: ' translate(14px,14px) scale(1)'
    },
    '& p': {
      position: 'absolute',
      top: '100%'
    },
    '&.error': {
      '& fieldset': {
        borderColor: 'red'
      },
      '& p': {
        color: 'var(--red-60)'
      }
    }
  },
  textHelper: {
    position: 'absolute',
    color: 'green'
  }
});
export const PasswordField = (props) => {
  const classes = useStyles();
  const { name, label, type = 'password', className = '', ...other } = props;
  const [values, setValues] = useState({
    showPassword: false
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <TextField
            {...field}
            {...other}
            name={name}
            id={name}
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            className={clsx(classes.field, className && className, errorClass)}
            variant="outlined"
            label={label}
            helperText={isError && meta.error}
          />
        );
      }}
    </Field>
  );
};
