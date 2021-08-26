import { MODEL_FORM_ACTION_TYPES } from 'redux/reducers/modelForm';

export const FormChangedAction = (payload) => ({
  type: MODEL_FORM_ACTION_TYPES.CHANGED,
  payload
});
export const FormConfirmAction = (payload) => ({
  type: MODEL_FORM_ACTION_TYPES.CONFIRM,
  payload
});
export const SetFormTabAction = (payload) => ({
  type: MODEL_FORM_ACTION_TYPES.CURRENT_TAB,
  payload
});
export const ResetFormConfirmAction = () => ({
  type: MODEL_FORM_ACTION_TYPES.RESET_CONFIRM
});
