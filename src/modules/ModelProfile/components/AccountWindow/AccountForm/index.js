import React from 'react';
import { FieldArray } from 'formik';
import { FormContainer } from 'components/Form/FormContainer';
import { SYSTEM_VALIDATION_SCHEMA } from 'constants/validateSchema';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { modelSystemFormSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty, filterChangesValues } from 'utils';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import { initialValues } from './initialValues';
import AccountFrame from './components/AccountFrame';
import FormTitle from '../../FormTitle';

const AccountForm = ({ className }) => {
  const dispatch = useDispatch();
  const { id, data } = useSelector(modelSystemFormSelector);
  const defaultValues = useSelector(staticModelDataSelector);
  const generateInitialValues = checkValueEmpty(data, initialValues);

  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    dispatch(setSubmitForm(id, filtredValues));
  };
  return (
    <div className={clsx(className)}>
      <FormTitle>Учетные данные</FormTitle>
      <FormContainer
        className="account"
        id="account"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={SYSTEM_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {({ values, submitForm }) => <AccountFrame defaultValues={defaultValues} />}
      </FormContainer>
    </div>
  );
};

export default AccountForm;
