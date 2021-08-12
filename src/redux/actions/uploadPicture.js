import { UPLOAD_PICTURE_ACTION_TYPES } from 'redux/reducers/uploadPicture';

export const UploadPictureAction = (payload) => ({
  type: UPLOAD_PICTURE_ACTION_TYPES.POST.START,
  payload
});
