import {
  MODEL_ACTION_TYPES,
  MODEL_STATUS_ACTION_TYPES,
  MODEL_DOCUMENTS_ACTION_TYPES
} from './reducer';

export const GetModelAction = (payload) => ({
  type: MODEL_ACTION_TYPES.GET.START,
  payload
});

export const UpdateModelAction = (payload) => ({
  type: MODEL_ACTION_TYPES.PUT.START,
  payload
});

export const UpdateModelStatusAction = (payload) => ({
  type: MODEL_STATUS_ACTION_TYPES.PUT.START,
  payload
});

export const CreateModelAction = (payload) => ({
  type: MODEL_ACTION_TYPES.POST.START,
  payload
});

export const DeleteModelAction = (payload) => ({
  type: MODEL_ACTION_TYPES.DELETE.START,
  payload
});

export const PostDocumentAction = (payload) => ({
  type: MODEL_DOCUMENTS_ACTION_TYPES.POST.START,
  payload
});

export const DeleteDocumentAction = (payload) => ({
  type: MODEL_DOCUMENTS_ACTION_TYPES.DELETE.START,
  payload
});

export const ResetAction = () => ({
  type: MODEL_ACTION_TYPES.RESET_STATE
});
