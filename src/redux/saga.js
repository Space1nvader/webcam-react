import { all } from 'redux-saga/effects';
import { ModelsListSaga } from 'pages/ModelsPage/redux/saga';
import { ModelProfileSaga } from 'modules/ModelProfile/redux/saga';

export default function* rootSaga() {
  yield all([ModelsListSaga(), ModelProfileSaga()]);
}
