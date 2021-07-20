import React, { useState } from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from 'components/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';

const useStyles = makeStyles({
  set: {
    position: 'relative',
    width: 'calc(50% - (32px / 2))'
  },
  field: {
    position: 'relative',
    width: '100%',
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
  },
  control: {
    position: 'absolute',
    top: 7,
    right: 14
  }
});
export const PasswordField = (props) => {
  const classes = useStyles();
  const { name, label, type = 'password', className = '', ...other } = props;
  const [values, setValues] = useState({
    showPassword: false
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
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
          <div className={classes.set}>
            <TextField
              {...field}
              {...other}
              value={values.password}
              name={name}
              id={name}
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              className={clsx(classes.field, className && className, errorClass)}
              variant="outlined"
              label={label}
              helperText={isError && meta.error}
            />
            {values.password && (
              <IconButton
                className={classes.control}
                aria-label={name}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )}
          </div>
        );
      }}
    </Field>
  );
};
