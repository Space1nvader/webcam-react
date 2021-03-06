import { MODELSLIST_ACTION_TYPES } from './reducer';

export const GetModelsListAction = (payload) => ({
  type: MODELSLIST_ACTION_TYPES.GET.START,
  payload
});
export const DeleteModelsAction = (payload) => ({
  type: MODELSLIST_ACTION_TYPES.DELETE.START,
  payload
});
export const ResetAction = () => ({
  type: MODELSLIST_ACTION_TYPES.RESET_STATE
});
