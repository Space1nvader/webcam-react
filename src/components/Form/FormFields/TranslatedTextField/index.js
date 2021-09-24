import React, { useEffect } from 'react';
import { Field } from 'formik';
import MaterialField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import cyrillicToTranslit from 'cyrillic-to-translit-js';
import { style } from '../style';

const useStyles = makeStyles(style);

export const TranslatedTextField = (props) => {
  const classes = useStyles();
  const { name, translateFrom, label, type = 'text', className, ...other } = props;

  const generateTranslite = (value) => cyrillicToTranslit().transform(value);
  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        const isError = !!meta.error;
        const { setFieldValue, values, initialValues } = form;
        const errorClass = isError ? 'error' : '';
        useEffect(() => {
          if (!initialValues[translateFrom]?.length && !meta.touched)
            setFieldValue(name, generateTranslite(values[translateFrom]));
        }, [meta.touched, values[translateFrom]]);

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
