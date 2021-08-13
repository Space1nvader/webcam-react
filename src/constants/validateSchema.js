import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'Eng', function Eng(err = 'Только английские буквы') {
  return this.matches(/^[^а-яА-ЯёЁ]+$/, err);
});
Yup.addMethod(Yup.string, 'Rus', function Rus(err = 'Только русские буквы') {
  return this.matches(/^[^a-zA-Z]+$/, err);
});
Yup.addMethod(Yup.string, 'Req', function Req(err = 'Обязательное поле') {
  return this.required(err);
});
const nubmerErr = 'Допускаются только цифры';

export const PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  nameRus: Yup.string().Rus(),
  name: Yup.string().Eng(),
  patronymicRus: Yup.string().Rus(),
  patronymic: Yup.string().Eng(),
  surnameRus: Yup.string().Rus(),
  surname: Yup.string().Eng(),
  age: Yup.number().typeError(nubmerErr).positive(),
  serialNumber: Yup.number().typeError(nubmerErr),
  countryId: Yup.string(),
  email: Yup.string().email('Некорректный формат')
});

export const SETTING_VALIDATION_SCHEMA = Yup.object().shape({
  height: Yup.number().typeError(nubmerErr).positive(),
  weight: Yup.number().typeError(nubmerErr).positive(),
  chestCircumference: Yup.number().typeError(nubmerErr).positive(),
  hipGirth: Yup.number().typeError(nubmerErr).positive(),
  waistCircumference: Yup.number().typeError(nubmerErr).positive(),
  experience: Yup.string(),
  about: Yup.string(),
  style: Yup.string()
});

export const SYSTEM_VALIDATION_SCHEMA = Yup.object().shape({
  nickname: Yup.string().Eng().Req()
});
