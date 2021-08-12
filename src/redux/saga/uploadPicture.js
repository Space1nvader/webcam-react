import { call, put, takeLatest } from 'redux-saga/effects';
import SERVICE_API from 'api';
import { UPLOAD_PICTURE_ACTION_TYPES } from 'redux/reducers/uploadPicture';

function* uploadPicture(action) {
  try {
    const { data } = yield call(SERVICE_API.Picture.uploadPicture, action.payload);
    yield put({
      type: UPLOAD_PICTURE_ACTION_TYPES.POST.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: UPLOAD_PICTURE_ACTION_TYPES.POST.ERROR,
      payload: response.data
    });
  }
}

export function* uploadPictureSaga() {
  yield takeLatest(UPLOAD_PICTURE_ACTION_TYPES.POST.START, uploadPicture);
}
