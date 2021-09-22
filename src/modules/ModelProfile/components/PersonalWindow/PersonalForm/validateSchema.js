import * as Yup from 'yup';
import { numberErr } from 'constants/validateSchema';

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
