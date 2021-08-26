import React, { useState, useMemo } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { FormContainer } from 'components/Form/FormContainer';
import { FormChangedAction } from 'redux/actions/modelForm';
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
  const { children, initialValues, ...other } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isFormChanged, setIsFormChanged] = useState(false);

  const setFormChanges = (formChangedCheck) => {
    useMemo(() => {
      dispatch(FormChangedAction(formChangedCheck));
      setIsFormChanged(formChangedCheck);
    }, [formChangedCheck]);
  };
  return (
    <FormContainer initialValues={initialValues} {...other}>
      {({ values, submitForm }) => {
        setFormChanges(JSON.stringify(values) !== JSON.stringify(initialValues));
        return (
          <>
            <SubmitModal onSubmit={submitForm} values={values} />
            {children}
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
