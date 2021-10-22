import { call, put, takeEvery } from 'redux-saga/effects';
import SERVICE_API from 'api';
import {
  MODEL_ACTION_TYPES,
  MODEL_STATUS_ACTION_TYPES,
  MODEL_DOCUMENTS_ACTION_TYPES
} from './reducer';

function* getModel({ payload }) {
  try {
    const { data } = yield call(SERVICE_API.Model.getModel, payload);
    yield put({
      type: MODEL_ACTION_TYPES.GET.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_ACTION_TYPES.GET.ERROR,
      payload: response.data
    });
  }
}

function* updateModel(action) {
  const { payload } = action;
  try {
    yield call(SERVICE_API.Model.updateModel, payload);
    yield put({
      type: MODEL_ACTION_TYPES.PUT.SUCCESS,
      payload
    });

    yield getModel(action);
  } catch ({ response }) {
    yield put({
      type: MODEL_ACTION_TYPES.PUT.ERROR,
      payload: response.data
    });
  }
}
function* updateModelStatus({ payload }) {
  try {
    yield call(SERVICE_API.Model.updateModelStatus, payload);
    yield put({
      type: MODEL_STATUS_ACTION_TYPES.PUT.SUCCESS
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_STATUS_ACTION_TYPES.PUT.ERROR,
      payload: response.data
    });
  }
}
function* createModel({ payload }) {
  try {
    const { data } = yield call(SERVICE_API.Model.createModel, payload);
    yield put({
      type: MODEL_ACTION_TYPES.POST.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_ACTION_TYPES.POST.ERROR,
      payload: response.data
    });
  }
}
function* deleteModel({ payload }) {
  try {
    const { data } = yield call(SERVICE_API.Model.deleteModel, payload);

    yield put({
      type: MODEL_ACTION_TYPES.DELETE.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_ACTION_TYPES.DELETE.ERROR,
      payload: response.data
    });
  }
}

function* attachDocument({ payload }) {
  try {
    const { data } = yield call(SERVICE_API.Model.attachFile, payload);
    yield put({
      type: MODEL_DOCUMENTS_ACTION_TYPES.POST.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_DOCUMENTS_ACTION_TYPES.POST.ERROR,
      payload: response.data
    });
  }
}

function* deleteDocument({ payload }) {
  try {
    yield call(SERVICE_API.Model.detachFile, payload);
    yield put({
      type: MODEL_DOCUMENTS_ACTION_TYPES.DELETE.SUCCESS,
      payload
    });
  } catch ({ response }) {
    yield put({
      type: MODEL_DOCUMENTS_ACTION_TYPES.DELETE.ERROR,
      payload: response.data
    });
  }
}

export function* ModelProfileSaga() {
  yield takeEvery(MODEL_ACTION_TYPES.GET.START, getModel);
  yield takeEvery(MODEL_ACTION_TYPES.PUT.START, updateModel);
  yield takeEvery(MODEL_ACTION_TYPES.POST.START, createModel);
  yield takeEvery(MODEL_ACTION_TYPES.DELETE.START, deleteModel);
  yield takeEvery(MODEL_DOCUMENTS_ACTION_TYPES.POST.START, attachDocument);
  yield takeEvery(MODEL_DOCUMENTS_ACTION_TYPES.DELETE.START, deleteDocument);
  yield takeEvery(MODEL_STATUS_ACTION_TYPES.PUT.START, updateModelStatus);
}
