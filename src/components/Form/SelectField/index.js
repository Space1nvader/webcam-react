import React from 'react';
import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 30,
    '& label': {
      transform: ' translate(14px,14px) scale(1)'
    }
  },
  select: {
    '&>div': {
      padding: 12
    }
  }
});
export const SelectField = (props) => {
  const classes = useStyles();
  const { name, label, options, className, ...other } = props;
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Field {...props}>
      {({ field, meta }) => {
        setValue(field.value);
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <FormControl variant="outlined" {...other} className={clsx(className, classes.field)}>
            <InputLabel id={name}>{label}</InputLabel>
            <Select
              {...field}
              labelId={name}
              value={value}
              name={name}
              id={name}
              className={clsx(classes.select, errorClass)}
              onChange={handleChange}
              label={label}
            >
              <MenuItem value="">
                <em>Не указано</em>
              </MenuItem>
              {options.map((option) => (
                <MenuItem value={option.value || option.title}>{option.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }}
    </Field>
  );
};
