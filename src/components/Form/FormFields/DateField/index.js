import React, { useEffect } from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { fromUnixTime, getTime } from 'date-fns';
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
      padding: 12,
      backgroundColor: '#fff'
    }
  }
});

export const DateField = (props) => {
  const [selectedDate, setSelectedDate] = React.useState('');

  const classes = useStyles();
  const { name, label, className, ...other } = props;
  return (
    <Field {...props}>
      {({ field, form, meta }) => {
        const { setFieldValue } = form;
        const isError = !!(meta.error && meta.touched);
        const errorClass = isError ? 'error' : '';
        useEffect(() => {
          if (selectedDate) setFieldValue(name, getTime(selectedDate) / 1000);
        }, [selectedDate]);
        return (
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              margin="normal"
              id={name}
              {...other}
              {...field}
              labelid={name}
              label={label}
              name={name}
              value={selectedDate || fromUnixTime(field.value)}
              className={clsx(classes.field, className, errorClass)}
              onChange={setSelectedDate}
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
