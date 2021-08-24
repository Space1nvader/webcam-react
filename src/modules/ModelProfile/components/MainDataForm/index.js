import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputField } from 'components/Form/inputField';
import { SelectField } from 'components/Form/SelectField';
import FieldSet from 'components/Form/FieldSet';
import bodyImage from 'assets/img/image19.png';
import { TextArea } from 'components/Form/TextArea';
import { SETTING_VALIDATION_SCHEMA } from 'constants/validateSchema';
import { checkValueEmpty } from 'untils/checkValueEmpty';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import clsx from 'clsx';
import { filterChangesValues } from 'untils/filterChangesValues';
import { initialValues } from './initialValues';
import FormTitle from '../FormTitle';
import setSubmitForm from '../../setSubmitForm';
import ModelFormContainer from '../ModelFormContainer';

const useStyles = makeStyles({
  formControl: {
    width: '48%'
  },
  container: {
    backgroundImage: `url(${bodyImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 180px'
  },
  divider: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'var(--gray-20)',
      width: 580,
      height: 1
    }
  },
  dividerLong: {
    '&::before': {
      width: 610
    }
  }
});

const MainDataForm = (props) => {
  const { className, ...other } = props;
  const classes = useStyles();
  const { modelData } = useSelector(modelSelector);
  const defaultValues = useSelector(staticModelDataSelector).model || '';
  const generateInitialValues =
    modelData && modelData?.description
      ? checkValueEmpty(modelData.description, initialValues)
      : initialValues;

  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    setSubmitForm(modelData.id, filtredValues);
  };

  return (
    <div className={clsx(classes.container, className)} {...other} style={{ width: 800 }}>
      <FormTitle>Основные данные</FormTitle>
      <ModelFormContainer
        className="settings"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={SETTING_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        <>
          <FieldSet divider>
            <SelectField
              label="Рассовая пренодлежность"
              name="raceId"
              options={defaultValues.race}
            />
            <InputField name="height" type="nubmer" style={{ width: 156 }} label="Рост" />
            <InputField
              name="weight"
              type="nubmer"
              style={{ width: 156, marginLeft: 20 }}
              label="Вес"
            />
          </FieldSet>
          <SelectField
            className={classes.divider}
            label="Телосложение"
            name="bodyId"
            style={{ display: 'flex', paddingBottom: 30 }}
            options={defaultValues.body}
          />

          <SelectField
            label="Длина волос"
            name="hairLengthId"
            style={{ display: 'flex' }}
            options={defaultValues.hairLength}
          />
          <SelectField
            label="Цвет волос"
            name="hairColorId"
            style={{ display: 'flex' }}
            options={defaultValues.hairColor}
          />
          <SelectField
            className={classes.divider}
            label="Цвет глаз"
            name="eyesColorId"
            style={{ display: 'flex', paddingBottom: 32 }}
            options={defaultValues.eyesColor}
          />
          <SelectField
            label="Разммер груди"
            name="breastSizeId"
            style={{ display: 'flex' }}
            options={defaultValues.breastSize}
          />
          <InputField
            label="Обхват груди"
            type="nubmer"
            style={{ display: 'flex' }}
            name="chestCircumference"
          />
          <InputField
            label="Обхват бедер"
            type="nubmer"
            style={{ display: 'flex' }}
            name="hipGirth"
          />
          <InputField
            className={classes.divider + classes.dividerLong}
            label="Обхват талии"
            type="nubmer"
            style={{ display: 'flex', paddingBottom: 30 }}
            name="waistCircumference"
          />
          <SelectField
            label="Лобковые волосы"
            name="pubicHairId"
            style={{ display: 'flex', marginBottom: 70 }}
            options={defaultValues.pubicHair}
          />
          <SelectField
            label="Сексуальные предпочтения"
            name="sexualPreferenceId"
            style={{ display: 'flex' }}
            options={defaultValues.sexualPreference}
          />
          <SelectField label="Язык 1" name="firstLanguageId" options={defaultValues.language} />
          <SelectField
            label="Язык 2"
            style={{ marginLeft: 32 }}
            name="secondLanguageId"
            options={defaultValues.language}
          />
          <TextArea style={{ marginTop: 20 }} label="Мой опыт" type="text" name="exp" />
          <TextArea label="Что заводит" type="text" name="turns" />
          <TextArea label="Мой стиль" type="text" name="style" />
        </>
      </ModelFormContainer>
    </div>
  );
};

export default MainDataForm;
