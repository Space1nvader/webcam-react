import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODEL_DESCRIPTION_ACTION_TYPES = new ActionTypes('MODEL_PERSONAL')
  .getAT()
  .updateAT()
  .getActionTypes();

const initialState = {
  modelData: ''
};
const handleAction = {
  [MODEL_DESCRIPTION_ACTION_TYPES.GET.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  }),
  [MODEL_DESCRIPTION_ACTION_TYPES.PUT.SUCCESS]: (state) => ({
    ...state
  })
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(MODEL_DESCRIPTION_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [MODEL_DESCRIPTION_ACTION_TYPES.GET.START],
    successActionType: [
      MODEL_DESCRIPTION_ACTION_TYPES.GET.SUCCESS,
      MODEL_DESCRIPTION_ACTION_TYPES.PUT.SUCCESS
    ],
    errorActionType: [
      MODEL_DESCRIPTION_ACTION_TYPES.GET.ERROR,
      MODEL_DESCRIPTION_ACTION_TYPES.PUT.ERROR
    ]
  })
)(reducer);
