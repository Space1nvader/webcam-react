import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormContainer } from 'components/Form/FormContainer';
import { InputField } from 'components/Form/inputField';
import { SelectField } from 'components/Form/SelectField';
import { SYSTEM_VALIDATION_SCHEMA } from 'constants/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import { PasswordField } from 'components/Form/PasswordField';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { CreateModelAction, UpdateModelAction } from 'modules/ModelProfile/redux/actions';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty } from 'untils/checkValueEmpty';
import { FormChangedAction } from 'redux/actions/formChanged';
import SkeletonInput from 'components/skeletons/SkeletonInput';
import { TextArea } from 'components/Form/TextArea';
import { initialValues } from './initialValues';
import FormTitle from '../FormTitle';
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

const SystemForm = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { modelData, isLoading, success } = useSelector(modelSelector);
  const defaultValues = useSelector(staticModelDataSelector).model || '';
  const generateInitialValues =
    modelData && modelData?.system
      ? checkValueEmpty(modelData.system, initialValues)
      : initialValues;
  const setSubmitForm = (data) => {
    if (modelData) {
      dispatch(UpdateModelAction({ id: modelData.id, data }));
    } else {
      dispatch(CreateModelAction({ data }));
    }
  };
  const onSubmit = (values) => {
    const filtredValues = { ...values };
    Object.keys(filtredValues).forEach((value) => {
      if (filtredValues[value] === generateInitialValues[value]) {
        delete filtredValues[value];
      }
    });
    setSubmitForm(filtredValues);
  };
  return (
    <div className={clsx(className)}>
      <FormTitle>Личные данные</FormTitle>
      <FormContainer
        className="system"
        id="system"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={SYSTEM_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {({ values, submitForm }) => {
          dispatch(
            FormChangedAction(JSON.stringify(values) !== JSON.stringify(generateInitialValues))
          );
          return (
            <>
              <SubmitModal onSubmit={submitForm} />
              <FieldSet divider>
                <InputField name="nickname" label="Псевдоним (eng*)" />
              </FieldSet>
              <FieldSet>
                <SelectField label="Страна" name="countryId" options={defaultValues.country} />
                <InputField name="name" label="Контрагент" />
                <TextArea label="Комментарий" name="comment" />
              </FieldSet>

              <Button
                color="secondary"
                type="submit"
                className={classes.button}
                variant="contained"
              >
                сохранить
              </Button>
              <Button className={classes.button} type="reset" variant="contained">
                отменить
              </Button>
            </>
          );
        }}
      </FormContainer>
    </div>
  );
};

export default SystemForm;
