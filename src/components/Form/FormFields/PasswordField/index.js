import React, { useState } from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconBtn from 'components/IconBtn';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { style } from '../style';

const useStyles = makeStyles({
  ...style,
  container: {
    position: 'relative',
    width: 'calc(50% - (32px / 2))'
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
          <div className={classes.container}>
            <TextField
              {...field}
              {...other}
              name={name}
              id={name}
              type={isVisible ? 'text' : 'password'}
              className={clsx(classes.field, classes.password, className, errorClass)}
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
