import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { style } from '../style';

const useStyles = makeStyles(style);

export const TextArea = (props) => {
  const classes = useStyles();
  const { name, rows = '5', label, type, className, ...other } = props;

  return (
    <Field {...props}>
      {({ field, meta }) => {
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
            className={clsx(classes.field, classes.multiline, className, errorClass)}
            variant="outlined"
            label={label}
            helperText={isError && meta.error}
          />
        );
      }}
    </Field>
  );
};
