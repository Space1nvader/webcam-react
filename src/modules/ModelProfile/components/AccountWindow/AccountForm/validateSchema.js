import * as Yup from 'yup';

export const ACCOUNT_VALIDATION_SCHEMA = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Пароль должен содержать больше 8 символов, заглавную букву, строчную букву, цифру и символ'
    )
    .Eng(),
  login: Yup.string().Eng()
});
