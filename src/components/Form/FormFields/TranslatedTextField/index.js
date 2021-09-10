import React, { useEffect } from 'react';
import { Field } from 'formik';
import MaterialField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import cyrillicToTranslit from 'cyrillic-to-translit-js';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 30,
    '& input': {
      padding: 12,
      backgroundColor: '#fff'
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
export const TranslatedTextField = (props) => {
  const classes = useStyles();
  const { name, translateFrom, label, type = 'text', className, ...other } = props;

  const generateTranslite = (value) => cyrillicToTranslit().transform(value);
  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        const isError = !!meta.error;
        const errorClass = isError ? 'error' : '';
        useEffect(() => {
          if (!meta.touched)
            form.setFieldValue(name, generateTranslite(form.values[translateFrom]));
        }, [meta.touched, form.values[translateFrom]]);

        const handleChange = (e) => {
          form.handleChange(e);

          // if (props.onChange) props.onChange(() => form.setFieldValue('name', e.target.value));
        };
        return (
          <MaterialField
            {...field}
            {...other}
            name={name}
            id={name}
            type={type}
            onChange={handleChange}
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
