import { CreateModelAction, UpdateModelAction } from 'modules/ModelProfile/redux/actions';
import { useDispatch } from 'react-redux';

const setSubmitForm = (id = 'false', data) => {
  const dispatch = useDispatch();
  if (id) {
    return dispatch(
      UpdateModelAction({
        id,
        data
      })
    );
  }
  return dispatch(CreateModelAction({ data }));
};

export default setSubmitForm;
