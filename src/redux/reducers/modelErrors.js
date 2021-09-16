import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODEL_ERRORS_ACTION_TYPES = new ActionTypes('MODEL_ERRORS')
  .getAT()
  .deleteAT()
  .getActionTypes();

const initialState = { errors: '' };

const handleAction = {
  [MODEL_ERRORS_ACTION_TYPES.GET.SUCCESS]: (state, params) => ({
    ...state,
    ...params
  })
};

export const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(MODEL_ERRORS_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [MODEL_ERRORS_ACTION_TYPES.GET.START],
    successActionType: [MODEL_ERRORS_ACTION_TYPES.GET.SUCCESS],
    errorActionType: [MODEL_ERRORS_ACTION_TYPES.GET.ERROR]
  })
)(reducer);
