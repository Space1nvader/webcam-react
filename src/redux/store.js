import { combineReducers } from 'redux';
import ModelsListReducer from 'pages/Dashboard/redux/reducer';

const appReducer = combineReducers({
  modelsList: ModelsListReducer
});
export default appReducer;
