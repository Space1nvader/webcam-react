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
const numberErr = 'Допускаются только цифры';

export const PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  nameRus: Yup.string().Rus(),
  name: Yup.string().Eng(),
  patronymicRus: Yup.string().Rus(),
  patronymic: Yup.string().Eng(),
  surnameRus: Yup.string().Rus(),
  surname: Yup.string().Eng(),
  age: Yup.number().typeError(numberErr).positive(),
  serialNumber: Yup.number().typeError(numberErr),
  countryId: Yup.string(),
  email: Yup.string().email('Некорректный формат')
});

export const DESCRIPTION_VALIDATION_SCHEMA = Yup.object().shape({
  height: Yup.number().typeError(numberErr).positive(),
  weight: Yup.number().typeError(numberErr).positive(),
  chestCircumference: Yup.number().typeError(numberErr).positive(),
  hipGirth: Yup.number().typeError(numberErr).positive(),
  waistCircumference: Yup.number().typeError(numberErr).positive(),
  experience: Yup.string(),
  about: Yup.string(),
  style: Yup.string()
});

export const SYSTEM_VALIDATION_SCHEMA = Yup.object().shape({
  nickname: Yup.string().Eng().Req()
});
