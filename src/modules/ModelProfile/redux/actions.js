import { MODEL_ACTION_TYPES } from './reducer';

export const CreateModelAction = (payload) => ({
  type: MODEL_ACTION_TYPES.POST.START,
  payload
});
export const DeleteModelAction = (payload) => ({
  type: MODEL_ACTION_TYPES.DELETE.START,
  payload
});
