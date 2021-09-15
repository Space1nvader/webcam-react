import React, { useEffect } from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { fromUnixTime, getTime } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import clsx from 'clsx';
import { style } from '../style';

const useStyles = makeStyles(style);

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
