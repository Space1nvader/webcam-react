import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODELSLIST_ACTION_TYPES = new ActionTypes('MODELSLIST').getAT().getActionTypes();

const initialState = {
  modelList: ''
};
const handleAction = {
  [MODELSLIST_ACTION_TYPES.GET.SUCCESS]: (state, params) => ({
    ...state,
    ...params
  })
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(MODELSLIST_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [MODELSLIST_ACTION_TYPES.GET.START],
    successActionType: [MODELSLIST_ACTION_TYPES.GET.SUCCESS],
    errorActionType: [MODELSLIST_ACTION_TYPES.GET.ERROR]
  })
)(reducer);
