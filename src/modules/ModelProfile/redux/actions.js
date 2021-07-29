import { MODELPROFILE_ACTION_TYPES } from './reducer';

export const GetModelDataAction = (payload) => ({
  type: MODELPROFILE_ACTION_TYPES.GET.START,
  payload
});

export const ResetAction = () => ({
  type: MODELPROFILE_ACTION_TYPES.RESET_STATE
});
