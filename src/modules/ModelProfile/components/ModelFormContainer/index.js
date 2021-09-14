import React from 'react';
import { FormContainer } from 'components/Form/FormContainer';
import ModelFormBody from './ModelFormBody';

const ModelFormContainer = (props) => (
  <FormContainer {...props}>{(form) => <ModelFormBody form={form} {...props} />}</FormContainer>
);

export default ModelFormContainer;
