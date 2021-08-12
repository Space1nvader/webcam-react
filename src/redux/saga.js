import { all } from 'redux-saga/effects';
import { ModelsListSaga } from 'pages/ModelsPage/redux/saga';
import { ModelProfileSaga } from 'modules/ModelProfile/redux/saga';
import { staticDataSaga } from './saga/staticData';
import { uploadPictureSaga } from './saga/uploadPicture';

export default function* rootSaga() {
  yield all([ModelsListSaga(), ModelProfileSaga(), uploadPictureSaga(), staticDataSaga()]);
}
