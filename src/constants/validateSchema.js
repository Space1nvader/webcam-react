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
  nameRus: Yup.string().Req().Rus(),
  name: Yup.string().Req().Eng(),
  patronymicRus: Yup.string().Req().Rus(),
  patronymic: Yup.string().Req().Eng(),
  surnameRus: Yup.string().Req().Rus(),
  surname: Yup.string().Req().Eng(),
  age: Yup.number().typeError(nubmerErr).positive(),
  serialNumber: Yup.number().typeError(nubmerErr),
  countryId: Yup.string().Req(),
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
