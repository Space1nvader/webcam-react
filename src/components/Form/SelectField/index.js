import React from 'react';
import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
export const SelectField = (props) => {
  const classes = useStyles();
  const { name, label, children, className } = props;
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
          <FormControl variant="outlined" className={classes.field}>
            <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
            <Select
              {...field}
              labelId={name}
              value={value}
              name={name}
              id={name}
              className={`${classes.field} ${className} ${errorClass}`}
              onChange={handleChange}
              label={label}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {children.map((option) => (
                <MenuItem value={option.value}>{option.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }}
    </Field>
  );
};
