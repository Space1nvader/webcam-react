import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const STATICDATA_ACTION_TYPES = new ActionTypes('STATICDATA').getAT().getActionTypes();

const initialState = {};
const handleAction = {
  [STATICDATA_ACTION_TYPES.GET.SUCCESS]: (state, params) => ({
    ...state,
    ...params
  })
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(STATICDATA_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [STATICDATA_ACTION_TYPES.GET.START],
    successActionType: [STATICDATA_ACTION_TYPES.GET.SUCCESS],
    errorActionType: [STATICDATA_ACTION_TYPES.GET.ERROR]
  })
)(reducer);
