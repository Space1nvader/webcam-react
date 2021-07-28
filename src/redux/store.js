import { combineReducers } from 'redux';
import ModelsListReducer from 'pages/ModelsPage/redux/reducer';
import ModelProfileReducer from 'modules/ModelProfile/redux/reducer';

const appReducer = combineReducers({
  modelsList: ModelsListReducer,
  profile: ModelProfileReducer
});
export default appReducer;
