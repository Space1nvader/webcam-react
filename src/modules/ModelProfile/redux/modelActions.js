import { MODELPROFILE_ACTION_TYPES } from './modelReducer';

export const GetModelDataAction = (payload) => ({
  type: MODELPROFILE_ACTION_TYPES.GET.START,
  payload
});
export const UpdateModelDataAction = (payload) => ({
  type: MODELPROFILE_ACTION_TYPES.PUT.START,
  payload
});

export const CreateModelAction = (payload) => ({
  type: MODELPROFILE_ACTION_TYPES.POST.START,
  payload
});
export const DeleteModel = (payload) => ({
  type: MODELPROFILE_ACTION_TYPES.DELETE.START,
  payload
});
export const ResetAction = () => ({
  type: MODELPROFILE_ACTION_TYPES.RESET_STATE
});
