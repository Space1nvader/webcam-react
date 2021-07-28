import { combineReducers } from 'redux';
import ModelsListReducer from 'pages/ModelsPage/redux/reducer';
import ModelProfileReducer from 'modules/ModelProfile/redux/reducer';
import StaticDataReducer from 'redux/reducers/staticData';

const appReducer = combineReducers({
  modelsList: ModelsListReducer,
  profile: ModelProfileReducer,
  staticData: StaticDataReducer
});
export default appReducer;
