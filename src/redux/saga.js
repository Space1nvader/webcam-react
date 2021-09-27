import { all } from 'redux-saga/effects';
import { ModelsListSaga } from 'pages/ModelsPage/redux/saga';
import { ModelProfileSaga } from 'modules/ModelProfile/redux/saga';
import { StaticDataSaga } from './saga/staticData';
import { ModelErrorsSaga } from './saga/modelErrors';
import { UploadPictureSaga } from './saga/uploadPicture';

export default function* rootSaga() {
  yield all([
    ModelsListSaga(),
    ModelErrorsSaga(),
    ModelProfileSaga(),
    UploadPictureSaga(),
    StaticDataSaga()
  ]);
}
