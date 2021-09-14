import React, { useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import SubmitModal from 'modules/ModelProfile/components/SubmitModal';
import { FormChangedAction } from 'redux/actions/modelForm';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    marginRight: 16,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 14,
    padding: '8px 24px',
    letterSpacing: '0.035em'
  }
});

const ModelFormBody = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { form, children, title, payload, initialValues } = props;
  const { values, submitForm, setFieldValues } = form;

  const formChangedCheck = useMemo(
    () => JSON.stringify(values) !== JSON.stringify(initialValues),
    [values, initialValues]
  );

  useEffect(() => {
    dispatch(FormChangedAction(formChangedCheck));
  }, [dispatch, formChangedCheck]);

  useEffect(() => {
    if (payload) setFieldValues(...Object.entries(payload));
  }, [setFieldValues, payload]);

  return (
    <>
      <SubmitModal onSubmit={submitForm} values={values} />
      <FormTitle>{title}</FormTitle>
      {children}
      <Button color="secondary" type="submit" className={classes.button} variant="contained">
        сохранить
      </Button>
      <Button className={classes.button} type="reset" variant="contained">
        отменить
      </Button>
    </>
  );
};

export default ModelFormBody;
