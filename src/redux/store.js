import { combineReducers } from 'redux';
import ModelsListReducer from 'pages/ModelsPage/redux/reducer';
import ModelProfileReducer from 'modules/ModelProfile/redux/modelReducer';
import StaticDataReducer from 'redux/reducers/staticData';
import { formChangedReducer } from 'redux/reducers/formChanged';
import uploadPictureReducer from './reducers/uploadPicture';

const appReducer = combineReducers({
  modelsList: ModelsListReducer,
  model: ModelProfileReducer,
  picture: uploadPictureReducer,
  staticData: StaticDataReducer,
  formChanged: formChangedReducer
});
export default appReducer;
