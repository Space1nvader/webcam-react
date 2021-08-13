import { call, put, takeEvery } from 'redux-saga/effects';
import SERVICE_API from 'api';
import { MODELSLIST_ACTION_TYPES } from './reducer';

function* getModels(action) {
  try {
    const { data } = yield call(SERVICE_API.Models.getModels, action.payload);
    yield put({
      type: MODELSLIST_ACTION_TYPES.GET.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODELSLIST_ACTION_TYPES.GET.ERROR,
      payload: response.data
    });
  }
}

export function* ModelsListSaga() {
  yield takeEvery(MODELSLIST_ACTION_TYPES.GET.START, getModels);
}
