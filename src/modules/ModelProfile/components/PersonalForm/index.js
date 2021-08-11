import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormContainer } from 'components/Form/FormContainer';
import { InputField } from 'components/Form/inputField';
import { DateField } from 'components/Form/DateField';
import { SelectField } from 'components/Form/SelectField';
import { PROFILE_VALIDATION_SCHEMA } from 'constants/validateSchema';
import FieldSet from 'components/Form/FieldSet';
import { PasswordField } from 'components/Form/PasswordField';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateModelDataAction } from 'modules/ModelProfile/redux/modelActions';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { checkValueEmpty } from 'untils/checkValueEmpty';
import { FormChangedAction } from 'redux/actions/formChanged';

import SkeletonInput from 'components/skeletons/SkeletonInput';
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

const PersonalForm = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { modelData, isLoading } = useSelector(modelSelector);
  const defaultValues = useSelector(staticModelDataSelector).model || '';
  const generateInitialValues =
    modelData && modelData?.personal
      ? checkValueEmpty(modelData.personal, initialValues)
      : initialValues;
  const onSubmit = (values) => {
    console.log('SUBMITED VALUES', values);
    dispatch(UpdateModelDataAction({ id: modelData.id, data: values }));
  };
  return (
    <div className={clsx(className)}>
      <FormTitle>Личные данные</FormTitle>

      {isLoading ? (
        <>
          <FieldSet>
            <SkeletonInput style={{ display: 'inline-flex', marginRight: 32 }} width={352} />
            <SkeletonInput style={{ display: 'inline-flex' }} width={352} />
          </FieldSet>
          <FieldSet divider>
            <SkeletonInput style={{ display: 'inline-flex', marginRight: 32 }} width={352} />
            <SkeletonInput style={{ display: 'inline-flex' }} width={352} />
          </FieldSet>
        </>
      ) : (
        <FormContainer
          className="settings"
          id="settings"
          enableReinitialize
          initialValues={generateInitialValues}
          validationSchema={PROFILE_VALIDATION_SCHEMA}
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
                  <InputField name="nameRus" label="Имя (рус*)" />
                  <InputField name="name" label="Имя (eng*)" />
                  <InputField name="patronymicRus" label="Отчество (рус)" />
                  <InputField name="patronymic" label="Отчество (eng*)" />
                  <InputField name="surnameRus" label="Фамилия (рус)" />
                  <InputField name="surname" label="Фамилия (eng*)" />
                </FieldSet>
                <FieldSet divider>
                  <SelectField label="Пол" name="genderId" options={defaultValues.gender} />
                  <InputField label="Отображаемый возраст" type="number" name="age" />
                </FieldSet>
                <FieldSet divider title="Паспортные данные">
                  <DateField name="birthday" label="Дата рождения" />
                  <InputField name="serialNumber" type="text" label="Серия номер" />
                  <DateField name="validatedAt" label="Срок действия" />
                  <SelectField label="Страна" name="countryId" options={defaultValues.country} />
                  <InputField name="region" type="text" label="Регион" />
                  <InputField name="city" type="text" label="Город" />
                  <InputField name="address" type="text" label="Адрес" />
                </FieldSet>
                <FieldSet>
                  <InputField label="Почтовый индекс" name="zipCode" />
                  <InputField label="Телефон" type="phone" name="phone" />
                  <InputField label="Email" type="email" name="email" />
                  <PasswordField label="Email пароль" name="emailPassword" />
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
      )}
    </div>
  );
};

export default PersonalForm;
