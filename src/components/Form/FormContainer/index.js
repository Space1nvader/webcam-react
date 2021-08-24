import React from 'react';
import { Form, Formik } from 'formik';
import FormikErrorFocus from 'formik-error-focus';
import { FormErrorContainer } from './FormErrorContainer';

export const FormContainer = (props) => {
  const { serverErrors, className, children, ...other } = props;
  return (
    <Formik {...other}>
      {(formik) => {
        const { setErrors } = formik;
        return (
          <FormErrorContainer serverErrors={serverErrors && serverErrors} setErrors={setErrors}>
            <Form className={className}>
              <FormikErrorFocus
                offset={-200}
                align={'top'}
                focusDelay={550}
                ease={'inOutQuart'}
                duration={550}
              />
              {children(formik)}
            </Form>
          </FormErrorContainer>
        );
      }}
    </Formik>
  );
};
