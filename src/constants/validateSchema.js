import { fromUnixTime, getTime } from 'date-fns';
import { format } from 'date-fns/esm';
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
Yup.addMethod(Yup.number, 'Positive', function Positive(err = 'Значение должно быть больше нуля') {
  return this.positive(err);
});
Yup.addMethod(Yup.number, 'MinAge', function (message) {
  return this.test('test-min-age', message, (value) => {
    const date = fromUnixTime(value);
    const inputDate = new Date(date.getFullYear() + 18, date.getMonth(), date.getDate());
    return inputDate <= new Date();
  });
});
const numberErr = 'Допускаются только цифры';

export const PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  nameRus: Yup.string().Rus(),
  name: Yup.string().Eng(),
  patronymicRus: Yup.string().Rus(),
  patronymic: Yup.string().Eng(),
  surnameRus: Yup.string().Rus(),
  surname: Yup.string().Eng(),
  age: Yup.number().typeError(numberErr).Positive(),
  serialNumber: Yup.number().typeError(numberErr),
  countryId: Yup.string(),
  birthday: Yup.number()
    .typeError('Укажите полную дату рождения')
    .MinAge('Вам должно быть больше 18 лет'),
  email: Yup.string().email('Некорректный формат')
});

export const DESCRIPTION_VALIDATION_SCHEMA = Yup.object().shape({
  height: Yup.number().typeError(numberErr).Positive(),
  weight: Yup.number().typeError(numberErr).Positive(),
  chestCircumference: Yup.number().typeError(numberErr).Positive(),
  hipGirth: Yup.number().typeError(numberErr).Positive(),
  waistCircumference: Yup.number().typeError(numberErr).Positive(),
  experience: Yup.string(),
  about: Yup.string(),
  style: Yup.string()
});

export const SYSTEM_VALIDATION_SCHEMA = Yup.object().shape({
  nickname: Yup.string().Eng().Req()
});

export const ACCOUNT_VALIDATION_SCHEMA = Yup.object().shape({
  password: Yup.string()
    .Eng()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Пароль должен содержать больше 8 символов, заглавную букву, строчную букву, цифру и символ'
    )
});
