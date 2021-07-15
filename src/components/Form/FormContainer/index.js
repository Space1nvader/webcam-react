import React from 'react';
import { Form, Formik } from 'formik';
import { FormErrorContainer } from './FormErrorContainer';

export const FormContainer = (props) => {
  const { serverErrors, className, children, ...other } = props;

  return (
    <Formik {...other}>
      {(formik) => {
        const { setErrors } = formik;
        return (
          <FormErrorContainer serverErrors={serverErrors && serverErrors} setErrors={setErrors}>
            <Form className={className}>{children(formik)}</Form>
          </FormErrorContainer>
        );
      }}
    </Formik>
  );
};
