import * as Yup from 'yup';

export const SYSTEM_VALIDATION_SCHEMA = Yup.object().shape({
  nickname: Yup.string().Eng().Req()
});
