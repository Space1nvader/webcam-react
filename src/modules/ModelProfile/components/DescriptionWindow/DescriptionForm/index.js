import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, TextArea, SelectField } from 'components/Form';
import FieldSet from 'components/Form/FieldSet';
import bodyImage from 'assets/img/image19.png';
import { DESCRIPTION_VALIDATION_SCHEMA } from 'constants/validateSchema';
import { checkValueEmpty, filterChangesValues } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { modelDescriptionFormSelector } from 'modules/ModelProfile/redux/selectors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import clsx from 'clsx';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import ModelFormContainer from 'modules/ModelProfile/components/ModelFormContainer/index';
import { initialValues } from './initialValues';

const useStyles = makeStyles({
  formControl: {
    width: '48%'
  },
  container: {
    backgroundImage: `url(${bodyImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 800px',
    backgroundPosition: 'right 490px'
  },
  divider: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'var(--gray-20)',
      height: 1
    }
  },
  dividerHeader: {
    paddingBottom: 30,
    '&::before': {
      width: 580
    }
  },
  dividerBreast: {
    '&::before': {
      width: 560
    }
  },
  dividerLong: {
    marginBottom: 70,
    '&::before': {
      width: 610
    }
  }
});

const DescriptionForm = (props) => {
  const { className, ...other } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, data } = useSelector(modelDescriptionFormSelector);
  const defaultValues = useSelector(staticModelDataSelector);
  const generateInitialValues = checkValueEmpty(data, initialValues);
  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    dispatch(setSubmitForm(id, filtredValues));
  };

  return (
    <div className={clsx(classes.container, className)} {...other}>
      <ModelFormContainer
        title="Основные данные"
        className="settings"
        enableReinitialize
        initialValues={generateInitialValues}
        validationSchema={DESCRIPTION_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        <>
          <FieldSet style={{ marginBottom: 10 }}>
            <TextArea label="Мой опыт" type="text" name="exp" />
            <TextArea label="Что заводит" type="text" name="turns" />
            <TextArea label="Мой стиль" type="text" name="style" />
            <TextArea label="Обо мне" type="text" name="about" />
            <SelectField
              label="Рассовая пренодлежность"
              name="raceId"
              options={defaultValues.race}
            />
            <div className="FieldRow" style={{ width: 'calc(50% - (32px / 2))' }}>
              <TextField name="height" type="number" label="Рост" />
              <TextField name="weight" type="number" style={{ marginLeft: 32 }} label="Вес" />
            </div>
          </FieldSet>
          <SelectField
            className={`${classes.divider} ${classes.dividerHeader}`}
            label="Телосложение"
            name="bodyId"
            style={{ display: 'flex' }}
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
            className={`${classes.divider} ${classes.dividerBreast}`}
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
          <TextField
            label="Обхват груди"
            type="number"
            style={{ display: 'flex' }}
            name="chestCircumference"
          />
          <TextField
            label="Обхват бедер"
            type="number"
            style={{ display: 'flex' }}
            name="hipGirth"
          />
          <TextField
            label="Обхват талии"
            type="number"
            style={{ display: 'flex' }}
            name="waistCircumference"
          />
          <SelectField
            label="Лобковые волосы"
            className={`${classes.divider} ${classes.dividerLong}`}
            name="pubicHairId"
            style={{ display: 'flex' }}
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
        </>
      </ModelFormContainer>
    </div>
  );
};

export default DescriptionForm;
