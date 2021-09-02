import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { FormContainer } from 'components/Form/FormContainer';
import { FormChangedAction } from 'redux/actions/modelForm';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import SubmitModal from '../SubmitModal';

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

const ModelFormContainer = (props) => {
  const { children, title = '', initialValues, payload, ...other } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isFormChanged, setIsFormChanged] = useState(false);
  const useFormChanges = (formChangedCheck) => {
    useEffect(() => {
      dispatch(FormChangedAction(formChangedCheck));
      setIsFormChanged(formChangedCheck);
    }, [formChangedCheck]);
  };

  const setPayload = (setValue) => {
    useEffect(() => {
      if (payload) setValue.apply(this, ...Object.entries(payload));
    }, [payload]);
  };

  return (
    <FormContainer initialValues={initialValues} {...other}>
      {({ values, submitForm, setFieldValue }) => {
        useFormChanges(JSON.stringify(values) !== JSON.stringify(initialValues));
        return (
          <>
            <SubmitModal onSubmit={submitForm} values={values} />
            <FormTitle>{title}</FormTitle>
            {children}
            {setPayload(setFieldValue)}
            <Button color="secondary" type="submit" className={classes.button} variant="contained">
              сохранить
            </Button>
            <Button className={classes.button} type="reset" variant="contained">
              отменить
            </Button>
          </>
        );
      }}
    </FormContainer>
  );
};

export default ModelFormContainer;
