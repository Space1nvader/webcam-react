import { combineReducers } from 'redux';
import ModelsListReducer from 'pages/ModelsPage/redux/reducer';
import ModelPersonalReducer from 'modules/ModelProfile/redux/personal/reducer';
import StaticDataReducer from 'redux/reducers/staticData';
import { formChangedReducer } from 'redux/reducers/formChanged';
import uploadPictureReducer from './reducers/uploadPicture';

const appReducer = combineReducers({
  modelsList: ModelsListReducer,
  personal: ModelPersonalReducer,
  picture: uploadPictureReducer,
  staticData: StaticDataReducer,
  formChanged: formChangedReducer
});
export default appReducer;
