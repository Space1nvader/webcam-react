import React from 'react';
import { Field } from 'formik';
import { KeyboardDatePicker } from '@material-ui/pickers';
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
export const DateField = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  const { name, label, options, className = '', ...other } = props;

  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        return (
          <KeyboardDatePicker
            disableToolbar
            variant="outlined"
            format="MM/dd/yyyy"
            id={name}
            {...field}
            labelId={name}
            label={name}
            name={name}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
            helperText={meta.error || ''}
          />
        );
      }}
    </Field>
  );
};
