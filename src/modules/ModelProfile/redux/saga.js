import { call, put, takeEvery } from 'redux-saga/effects';
import SERVICE_API from 'api';
import { MODEL_PERSONAL_ACTION_TYPES } from './personal/reducer';

function* getModel(action) {
  try {
    const { data } = yield call(SERVICE_API.Model.getModel, action.payload);
    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.GET.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.GET.ERROR,
      payload: response.data
    });
  }
}

function* updateModel(action) {
  try {
    yield call(SERVICE_API.Model.updateModel, action.payload);

    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.PUT.SUCCESS
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.PUT.ERROR,
      payload: response.data
    });
  }
}
function* createModel(action) {
  try {
    const { data } = yield call(SERVICE_API.Model.createModel, action.payload);

    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.POST.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.POST.ERROR,
      payload: response.data
    });
  }
}
function* deleteModel(action) {
  try {
    const { data } = yield call(SERVICE_API.Model.deleteModel, action.payload);

    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.DELETE.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_PERSONAL_ACTION_TYPES.DELETE.ERROR,
      payload: response.data
    });
  }
}

export function* ModelProfileSaga() {
  yield takeEvery(MODEL_PERSONAL_ACTION_TYPES.GET.START, getModel);
  yield takeEvery(MODEL_PERSONAL_ACTION_TYPES.PUT.START, updateModel);
  // yield takeEvery(MODEL_PERSONAL_ACTION_TYPES.POST.START, createModel);
  // yield takeEvery(MODEL_PERSONAL_ACTION_TYPES.DELETE.START, deleteModel);
}
