import React from 'react';
import { Field } from 'formik';
import TranslatedInput from './TranslatedInput';

export const TranslatedTextField = (props) => (
  <Field {...props}>{(formik) => <TranslatedInput formik={formik} {...props} />}</Field>
);
