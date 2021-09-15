import React from 'react';
import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { style } from '../style';

const useStyles = makeStyles(style);

export const SelectField = (props) => {
  const classes = useStyles();
  const { name, label, options, defaultValue = 'default', className, ...other } = props;

  return (
    <Field {...props}>
      {({ field, meta }) => {
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <FormControl variant="outlined" {...other} className={clsx(className, classes.field)}>
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              {...field}
              disabled={!options}
              labelId={name}
              value={field.value || defaultValue}
              defaultValue={defaultValue}
              name={name}
              id={name}
              className={clsx(classes.select, errorClass)}
              label={label}
            >
              <MenuItem value={defaultValue}>
                <em>Не указано</em>
              </MenuItem>
              {options?.length &&
                options.map((option) => (
                  <MenuItem key={option.id} value={option.id || option.title}>
                    {option.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        );
      }}
    </Field>
  );
};
