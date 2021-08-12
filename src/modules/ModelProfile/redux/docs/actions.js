import { MODELPROFILE_ACTION_TYPES } from './modelReducer';

export const PostDocumentAction = (payload) => ({
  type: MODELPROFILE_ACTION_TYPES.GET.START,
  payload
});
export const DeleteDocumentAction = (payload) => ({
  type: MODELPROFILE_ACTION_TYPES.PUT.START,
  payload
});
