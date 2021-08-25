import { combineReducers } from 'redux';
import ModelsListReducer from 'pages/ModelsPage/redux/reducer';
import ModelReducer from 'modules/ModelProfile/redux/reducer';
import StaticDataReducer from 'redux/reducers/staticData';
import { ModelFormReducer } from 'redux/reducers/modelForm';
import uploadPictureReducer from './reducers/uploadPicture';

const appReducer = combineReducers({
  modelsList: ModelsListReducer,
  model: ModelReducer,
  picture: uploadPictureReducer,
  staticData: StaticDataReducer,
  modelForm: ModelFormReducer
});
export default appReducer;
