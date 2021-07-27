import { call, put, takeEvery } from 'redux-saga/effects';
import SERVICE_API from 'api';
import { MODELPROFILE_ACTION_TYPES } from './reducer';

function* getProfile(action) {
  console.log('123', action);
  try {
    const { data } = yield call(SERVICE_API.Profile.getProfile, action.payload.id);

    yield put({
      type: MODELPROFILE_ACTION_TYPES.GET.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODELPROFILE_ACTION_TYPES.GET.ERROR,
      payload: response.data
    });
  }
}

export function* ModelProfileSaga() {
  yield takeEvery(MODELPROFILE_ACTION_TYPES.GET.START, getProfile);
}
