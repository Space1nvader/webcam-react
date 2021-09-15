import React from 'react';
import { Field } from 'formik';
import MaterialField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { style } from '../style';

const useStyles = makeStyles(style);

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
