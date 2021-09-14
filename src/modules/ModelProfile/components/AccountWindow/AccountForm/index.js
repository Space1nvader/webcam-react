import React from 'react';
// TODO: массив данных
// import { FieldArray } from 'formik';
import { FormContainer } from 'components/Form/FormContainer';
import { SYSTEM_VALIDATION_SCHEMA } from 'constants/validateSchema';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { modelSystemFormSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty, filterChangesValues } from 'utils';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import { initialValues } from './initialValues';
import AccountFrame from './components/AccountFrame';

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
        className="accountForm"
        id="accountForm"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={SYSTEM_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {({ values, submitForm }) => <AccountFrame defaultValues={defaultValues} />}
      </FormContainer>
      <IconBtn
        title="Добавить модель"
        style={{
          backgroundColor: 'var(--red-60)',
          height: 50,
          width: 50,
          boxShadow: '0px 2px 4px rgba(156, 43, 35, 0.2), 0px 4px 8px rgba(244, 67, 54, 0.2)'
        }}
      >
        <AddRoundedIcon style={{ fill: '#fff' }} />
      </IconBtn>
    </div>
  );
};

export default AccountForm;
