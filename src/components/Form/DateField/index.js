import React, { useEffect } from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { fromUnixTime, format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import clsx from 'clsx';

const useStyles = makeStyles({
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 30,
    marginTop: 0,
    '& label': {
      transform: ' translate(14px,14px) scale(1)'
    },
    '& input': {
      padding: 12
    }
  }
});

export const DateField = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  const { name, label, className, ...other } = props;
  return (
    <Field {...props}>
      {({ field, meta }) => {
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        useEffect(() => {
          setSelectedDate(format(fromUnixTime(field.value), 'dd.MM.yyyy'));
        }, [field.value]);

        return (
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              margin="normal"
              id={name}
              {...other}
              {...field}
              labelid={name}
              label={label}
              name={name}
              value={selectedDate}
              className={clsx(classes.field, className, errorClass)}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
                size: 'small'
              }}
              keyboardIcon={<DateRangeRoundedIcon />}
              helperText={meta.error || ''}
            />
          </MuiPickersUtilsProvider>
        );
      }}
    </Field>
  );
};
