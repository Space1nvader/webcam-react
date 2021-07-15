import React from 'react';
import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 26,
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
  const { name, label, options, className = '', ...other } = props;
  // eslint-disable-next-line no-nested-ternary
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <FormControl variant="outlined" {...other} className={`${className} ${classes.field}`}>
            <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
            <Select
              {...field}
              labelId={name}
              value={value}
              name={name}
              id={name}
              className={`${classes.select} ${errorClass}`}
              onChange={handleChange}
              label={label}
            >
              <MenuItem value="">
                <em>Не указано</em>
              </MenuItem>
              {options.map((option) => (
                <MenuItem value={option.value}>{option.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }}
    </Field>
  );
};
