import { all } from 'redux-saga/effects';
import { ModelsListSaga } from 'pages/Dashboard/redux/saga';

export default function* rootSaga() {
  yield all([ModelsListSaga()]);
}
