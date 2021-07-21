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
  const classList = `form ${classes.container} ${className || ''}`;

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={classList} {...other} style={{ width: 800 }}>
      <FormTitle>Основные данные</FormTitle>

      <FormContainer
        className="settings"
        // enableReinitialize
        initialValues={{}}
        validationSchema={SETTING_VALIDATION_SCHEMA}
        onSubmit={onSubmit}
      >
        {() => (
          <>
            <FieldSet divider>
              <SelectField
                className="form__field"
                label="Рассовая пренодлежность"
                name="race"
                options={[{ title: 'Белая' }, { title: 'Чёрная' }, { title: 'Индийская' }]}
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
              className={`form__field ${classes.divider}`}
              label="Телосложение"
              name="body"
              style={{ display: 'flex', paddingBottom: 30 }}
              options={[
                { title: 'Стройная' },
                { title: 'Изящное' },
                { title: 'С красивыми округлыми формами' }
              ]}
            />
            <InputField
              className="form__field"
              label="Длина волос"
              type="nubmer"
              style={{ display: 'flex' }}
              name="hair_height"
            />
            <SelectField
              className="form__field"
              label="Цвет волос"
              name="hair_color"
              style={{ display: 'flex' }}
              options={[{ title: 'Русые' }, { title: 'Изящное' }, { title: 'Русые' }]}
            />
            <SelectField
              className={`form__field ${classes.divider}`}
              label="Цвет глаз"
              name="aye_color"
              style={{ display: 'flex', paddingBottom: 32 }}
              options={[{ title: 'Карие' }, { title: 'Русые' }, { title: 'Карие' }]}
            />
            <SelectField
              className="form__field"
              label="Разммер груди"
              name="breast_size"
              style={{ display: 'flex' }}
              options={[{ title: 'A' }, { title: 'B' }, { title: 'C' }]}
            />
            <InputField
              className="form__field"
              label="Обхват груди"
              type="nubmer"
              style={{ display: 'flex' }}
              name="breast_girth"
            />
            <InputField
              className="form__field"
              label="Обхват бедер"
              type="nubmer"
              style={{ display: 'flex' }}
              name="hip_girth"
            />
            <InputField
              className={`form__field ${classes.divider} ${classes.dividerLong}`}
              label="Обхват талии"
              type="nubmer"
              style={{ display: 'flex', paddingBottom: 30 }}
              name="waist_girth"
            />
            <SelectField
              className="form__field"
              label="Лобковые волосы"
              name="pubic_hair"
              style={{ display: 'flex', marginBottom: 70 }}
              options={[{ title: 'Бритые' }, { title: 'Бритые' }, { title: 'Бритые' }]}
            />
            <SelectField
              className="form__field"
              label="Сексуальные предпочтения"
              name="sexual_preferences"
              style={{ display: 'flex' }}
              options={[{ title: 'Гетеро' }, { title: 'Гетеро' }, { title: 'Гетеро' }]}
            />
            <SelectField
              className="form__field"
              label="Язык 1"
              name="lang"
              options={[{ title: 'Английский' }, { title: 'Русский' }, { title: 'Английский' }]}
            />
            <SelectField
              className="form__field"
              label="Язык 2"
              style={{ marginLeft: 32 }}
              name="lang_second"
              options={[{ title: 'Русский' }, { title: 'Английский' }, { title: 'Русский' }]}
            />
            <TextArea
              style={{ marginTop: 20 }}
              className="form__field"
              label="Мой опыт"
              type="text"
              name="exp"
            />
            <TextArea className="form__field" label="Что заводит" type="text" name="turns" />
            <TextArea className="form__field" label="Мой стиль" type="text" name="style" />
            <Button color="secondary" className={classes.button} variant="contained">
              сохранить
            </Button>
            <Button
              className={classes.button}
              // onClick={() => validateForm().then(() => console.log('blah'))}
              type="submit"
              variant="contained"
            >
              отменить
            </Button>
          </>
        )}
      </FormContainer>
    </div>
  );
};

export default MainDataForm;
