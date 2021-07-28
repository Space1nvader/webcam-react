import { MODELSLIST_ACTION_TYPES } from './reducer';

export const GetModelsListAction = () => ({
  type: MODELSLIST_ACTION_TYPES.GET.START
});

export const ResetAction = () => ({
  type: MODELSLIST_ACTION_TYPES.RESET_STATE
});
