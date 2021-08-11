import { MODEL_PERSONAL_ACTION_TYPES } from './reducer';

export const GetPersonalDataAction = (payload) => ({
  type: MODEL_PERSONAL_ACTION_TYPES.GET.START,
  payload
});

export const UpdatePersonalDataAction = (payload) => ({
  type: MODEL_PERSONAL_ACTION_TYPES.PUT.START,
  payload
});

export const ResetAction = () => ({
  type: MODEL_PERSONAL_ACTION_TYPES.RESET_STATE
});
