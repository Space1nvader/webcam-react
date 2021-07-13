import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  field: {
    width: '48%',
    marginBottom: 26,
    '& input': {
      padding: 12
    },
    '& label': {
      transform: ' translate(14px,14px) scale(1)'
    }
  },
  button: {
    marginRight: 16,
    fontWeight: 700,
    letterSpacing: '0.035em'
  }
});
export const InputField = (props) => {
  const classes = useStyles();
  const { title = '', name, label, type, className } = props;
  // eslint-disable-next-line no-nested-ternary

  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <TextField
            {...field}
            name={name}
            id={name}
            type={type}
            className={`${classes.field} ${className} ${errorClass}`}
            variant="outlined"
            label={label}
          />
        );
      }}
    </Field>
  );
};
