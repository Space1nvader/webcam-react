import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'functions/customTheme';

const useStyles = makeStyles({
  field: {
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
  }
});
export const TextArea = (props) => {
  const classes = useStyles();
  const { title = '', name, required, rows = '5', label, type, className = '', ...other } = props;
  // eslint-disable-next-line no-nested-ternary

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
            multiline
            id={name}
            type={type}
            rows={rows}
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
