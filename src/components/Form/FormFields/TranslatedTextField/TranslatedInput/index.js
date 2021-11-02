import React, { useEffect } from 'react';
import clsx from 'clsx';
import MaterialField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import cyrillicToTranslit from 'cyrillic-to-translit-js';
import { style } from '../../style';

const useStyles = makeStyles(style);

const TranslatedInput = (props) => {
  const {
    name,
    translateFrom,
    label,
    type = 'text',
    className,
    formik: { field, form, meta },
    ...other
  } = props;
  const classes = useStyles();
  const isError = !!meta.error;
  const { setFieldValue, values, initialValues } = form;
  const errorClass = isError ? 'error' : '';
  const generateTranslite = (value) => cyrillicToTranslit().transform(value);
  useEffect(() => {
    if (!initialValues[translateFrom]?.length && !meta.touched)
      setFieldValue(name, generateTranslite(values[translateFrom]));
  }, [initialValues, meta.touched, name, setFieldValue, translateFrom, values]);
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
};

export default TranslatedInput;
