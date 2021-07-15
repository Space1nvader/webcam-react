import * as Yup from 'yup';
// import {phoneRegExp} from "constants/REG_EXP";
// ^[а-яА-ЯёЁ0-9]+$
// var

Yup.addMethod(Yup.string, 'Eng', function Eng(err = 'Только английские буквы') {
  return this.matches(/^[a-zA-Z]+$/, err);
});
Yup.addMethod(Yup.string, 'Rus', function Rus(err = 'Только русские буквы') {
  return this.matches(/^[а-яА-ЯёЁ]+$/, err);
});
Yup.addMethod(Yup.string, 'Req', function Req(err = 'Обязательное поле') {
  return this.required(err);
});
const nubmerErr = 'Допускаются только цифры';

export const PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  nickname: Yup.string().Req().Eng(),
  name: Yup.string().Req().Rus(),
  name_eng: Yup.string().Req().Eng(),
  secondname: Yup.string().Req().Rus(),
  secondname_eng: Yup.string().Req().Eng(),
  surname: Yup.string().Req().Rus(),
  surname_eng: Yup.string().Req().Eng(),
  old: Yup.number().typeError(nubmerErr),
  doc_series: Yup.number().typeError(nubmerErr),
  doc_nubmer: Yup.number().typeError(nubmerErr)
  // phone: Yup.string().required("Поле обязательно").matches(phoneRegExp, "Неверный номер телефона"),
  // file: Yup.mixed().test("fileSize", "Файл слишком большой", value => value?.size <= 20000)
});

export const SETTINGS_VALIDATION_SCHEMA = Yup.object().shape({
  password: Yup.string().required('Поле обязательно'),
  confirmPassword: Yup.string()
    .required('Поле обязательно')
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
});
