import { call, put, takeLatest } from 'redux-saga/effects';
import SERVICE_API from 'api';
import { MODEL_ERRORS_ACTION_TYPES } from 'redux/reducers/modelErrors';

function* getModelErrors() {
  try {
    const { data } = yield call(SERVICE_API.ModelErrors.getModelErrors);

    yield put({
      type: MODEL_ERRORS_ACTION_TYPES.GET.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_ERRORS_ACTION_TYPES.GET.ERROR,
      payload: response.data
    });
  }
}

export function* ModelErrorsSaga() {
  yield takeLatest(MODEL_ERRORS_ACTION_TYPES.GET.START, getModelErrors);
}
