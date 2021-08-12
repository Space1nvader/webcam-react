import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { FormContainer } from 'components/Form/FormContainer';
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
import { initialValues } from './initialValues';
import FormTitle from '../FormTitle';

const useStyles = makeStyles({
  button: {
    marginRight: 16,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 14,
    padding: '8px 24px',
    letterSpacing: '0.035em'
  },
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
  const { modelData, isLoading } = useSelector(modelSelector);
  const defaultValues = useSelector(staticModelDataSelector).model || '';
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={clsx(classes.container, className)} {...other} style={{ width: 800 }}>
      <FormTitle>Основные данные</FormTitle>

      <FormContainer
        className="settings"
        enableReinitialize
        initialValues={checkValueEmpty(modelData, initialValues)}
        validationSchema={SETTING_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {() => (
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
              name="hair_color"
              style={{ display: 'flex' }}
              options={[{ title: 'Русые' }, { title: 'Изящное' }, { title: 'Русые' }]}
            />
            <SelectField
              className={classes.divider}
              label="Цвет глаз"
              name="aye_color"
              style={{ display: 'flex', paddingBottom: 32 }}
              options={[{ title: 'Карие' }, { title: 'Русые' }, { title: 'Карие' }]}
            />
            <SelectField
              label="Разммер груди"
              name="breast_size"
              style={{ display: 'flex' }}
              options={[{ title: 'A' }, { title: 'B' }, { title: 'C' }]}
            />
            <InputField
              label="Обхват груди"
              type="nubmer"
              style={{ display: 'flex' }}
              name="breast_girth"
            />
            <InputField
              label="Обхват бедер"
              type="nubmer"
              style={{ display: 'flex' }}
              name="hip_girth"
            />
            <InputField
              className={classes.divider + classes.dividerLong}
              label="Обхват талии"
              type="nubmer"
              style={{ display: 'flex', paddingBottom: 30 }}
              name="waist_girth"
            />
            <SelectField
              label="Лобковые волосы"
              name="pubic_hair"
              style={{ display: 'flex', marginBottom: 70 }}
              options={[{ title: 'Бритые' }, { title: 'Бритые' }, { title: 'Бритые' }]}
            />
            <SelectField
              label="Сексуальные предпочтения"
              name="sexual_preferences"
              style={{ display: 'flex' }}
              options={[{ title: 'Гетеро' }, { title: 'Гетеро' }, { title: 'Гетеро' }]}
            />
            <SelectField
              label="Язык 1"
              name="lang"
              options={[{ title: 'Английский' }, { title: 'Русский' }, { title: 'Английский' }]}
            />
            <SelectField
              label="Язык 2"
              style={{ marginLeft: 32 }}
              name="lang_second"
              options={[{ title: 'Русский' }, { title: 'Английский' }, { title: 'Русский' }]}
            />
            <TextArea style={{ marginTop: 20 }} label="Мой опыт" type="text" name="exp" />
            <TextArea label="Что заводит" type="text" name="turns" />
            <TextArea label="Мой стиль" type="text" name="style" />
            <Button color="secondary" type="submit" className={classes.button} variant="contained">
              сохранить
            </Button>
            <Button className={classes.button} type="reset" variant="contained">
              отменить
            </Button>
          </>
        )}
      </FormContainer>
    </div>
  );
};

export default MainDataForm;
