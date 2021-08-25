import { CreateModelAction, UpdateModelAction } from 'modules/ModelProfile/redux/actions';

const setSubmitForm = (id = '', data) => {
  if (id) {
    return UpdateModelAction({
      id,
      data
    });
  }
  return CreateModelAction({ data });
};

export default setSubmitForm;
