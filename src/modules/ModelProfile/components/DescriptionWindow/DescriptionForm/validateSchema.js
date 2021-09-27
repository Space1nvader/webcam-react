import * as Yup from 'yup';
import { numberErr } from 'constants/validateSchema';

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
