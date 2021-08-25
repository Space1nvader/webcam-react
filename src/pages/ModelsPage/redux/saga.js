import { call, put, takeEvery } from 'redux-saga/effects';
import SERVICE_API from 'api';
import { MODELSLIST_ACTION_TYPES } from './reducer';

function* getModels({ payload }) {
  try {
    const { data } = yield call(SERVICE_API.Models.getModels, payload);
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
function* deleteModels({ payload }) {
  try {
    const modelData = yield call(SERVICE_API.Models.deleteModels, payload.data);
    yield* getModels({ payload: payload.currentPage });
    yield put({
      type: MODELSLIST_ACTION_TYPES.DELETE.SUCCESS,
      payload: modelData.data
    });
  } catch ({ response }) {
    yield put({
      type: MODELSLIST_ACTION_TYPES.DELETE.ERROR,
      payload: response.data
    });
  }
}
export function* ModelsListSaga() {
  yield takeEvery(MODELSLIST_ACTION_TYPES.GET.START, getModels);
  yield takeEvery(MODELSLIST_ACTION_TYPES.DELETE.START, deleteModels);
}
