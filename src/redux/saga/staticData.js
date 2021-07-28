import { call, put, takeLatest } from 'redux-saga/effects';
import SERVICE_API from 'api';
import { STATICDATA_ACTION_TYPES } from 'redux/reducers/staticData';

function* getStaticData() {
  try {
    const { data } = yield call(SERVICE_API.staticData.fields);

    yield put({
      type: STATICDATA_ACTION_TYPES.GET.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: STATICDATA_ACTION_TYPES.GET.ERROR,
      payload: response.data
    });
  }
}

export function* staticDataSaga() {
  yield takeLatest(STATICDATA_ACTION_TYPES.GET.START, getStaticData);
}
