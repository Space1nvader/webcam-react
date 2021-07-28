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
  nickname: Yup.string().Req().Eng(),
  nameRus: Yup.string().Req().Rus(),
  name: Yup.string().Req().Eng(),
  patronymicRus: Yup.string().Req().Rus(),
  patronymic: Yup.string().Req().Eng(),
  surnameRus: Yup.string().Req().Rus(),
  surname: Yup.string().Req().Eng(),
  age: Yup.number().typeError(nubmerErr).positive(),
  serialNumber: Yup.number().typeError(nubmerErr)
});

export const SETTING_VALIDATION_SCHEMA = Yup.object().shape({
  race: Yup.string(),
  height: Yup.number().typeError(nubmerErr).positive(),
  weight: Yup.number().typeError(nubmerErr).positive(),
  body: Yup.string(),
  hair_height: Yup.number().typeError(nubmerErr).positive(),
  hair_color: Yup.string(),
  aye_color: Yup.string(),
  breast_size: Yup.string(),
  breast_girth: Yup.number().typeError(nubmerErr).positive(),
  hip_girth: Yup.number().typeError(nubmerErr).positive(),
  waist_girth: Yup.number().typeError(nubmerErr).positive(),
  pubic_hair: Yup.string(),
  sexual_preferences: Yup.string(),
  lang: Yup.string(),
  lang_second: Yup.string(),
  exp: Yup.string(),
  turns: Yup.string(),
  style: Yup.string()
});
