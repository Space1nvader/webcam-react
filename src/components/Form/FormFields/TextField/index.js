import React from 'react';
import { Field } from 'formik';
import MaterialField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
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
  }
});
export const TextField = (props) => {
  const classes = useStyles();
  const { name, label, type = 'text', className, ...other } = props;

  return (
    <Field {...props}>
      {({ field, meta }) => {
        const isError = !!meta.error;
        const errorClass = isError ? 'error' : '';

        return (
          <MaterialField
            {...field}
            {...other}
            name={name}
            id={name}
            type={type}
            className={clsx(classes.field, className, errorClass)}
            variant="outlined"
            label={label}
            helperText={isError && meta.error}
          />
        );
      }}
    </Field>
  );
};
