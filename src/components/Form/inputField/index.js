import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 26,
    borderColor: 'red',
    '& input': {
      padding: 12,
      borderRarius: '12px'
    },
    '& label': {
      transform: ' translate(14px,14px) scale(1)'
    },
    '&.error': {
      '& fieldset': {
        borderColor: 'red'
      },
      '& p': {
        color: 'red'
      }
    }
  }
});
export const InputField = (props) => {
  const classes = useStyles();
  const { title = '', name, label, type, className = '', ...other } = props;
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
            helperText={meta.error || ''}
          />
        );
      }}
    </Field>
  );
};
