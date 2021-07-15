import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'functions/customTheme';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 30,
    borderColor: 'red',
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
export const InputField = (props) => {
  console.log('THEME', theme);
  const classes = useStyles();
  const { title = '', name, required, label, type, className = '', ...other } = props;
  // eslint-disable-next-line no-nested-ternary

  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        console.log('meta', meta);
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <TextField
            {...field}
            {...other}
            name={name}
            id={name}
            type={type}
            className={`${classes.field} ${className} ${errorClass}`}
            variant="outlined"
            label={label}
            helperText={isError && meta.error}
            // helperText={isError ? meta.error : required && 'Обязательное поле'}
          />
        );
      }}
    </Field>
  );
};
