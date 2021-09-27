import { MODEL_ERRORS_ACTION_TYPES } from 'redux/reducers/modelErrors';

export const getModelErrorsAction = (payload) => ({
  type: MODEL_ERRORS_ACTION_TYPES.GET.START,
  payload
});
export const deleteModelErrorsAction = (payload) => ({
  type: MODEL_ERRORS_ACTION_TYPES.DELETE.START,
  payload
});
