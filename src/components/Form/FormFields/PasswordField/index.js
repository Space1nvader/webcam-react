import React, { useState } from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconBtn from 'components/IconBtn';
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
      padding: 12
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
  const { name, label, className, ...other } = props;
  const [isVisible, setPasswordVisiblie] = useState(false);

  const handleClickShowPassword = () => {
    setPasswordVisiblie(!isVisible);
  };
  return (
    <Field {...props}>
      {({ field, meta }) => {
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <div className={classes.set}>
            <TextField
              {...field}
              {...other}
              name={name}
              id={name}
              type={isVisible ? 'text' : 'password'}
              className={clsx(classes.field, className, errorClass)}
              variant="outlined"
              label={label}
              helperText={isError && meta.error}
            />
            {field.value && (
              <IconBtn
                className={classes.control}
                aria-label={name}
                onClick={handleClickShowPassword}
              >
                {isVisible ? <Visibility /> : <VisibilityOff />}
              </IconBtn>
            )}
          </div>
        );
      }}
    </Field>
  );
};
