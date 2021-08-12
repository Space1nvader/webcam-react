import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODEL_ACTION_TYPES = new ActionTypes('MODEL')
  .getAT()
  .updateAT()
  .postAT()
  .deleteAT()
  .getActionTypes();

const initialState = {
  modelData: ''
};
const handleAction = {
  [MODEL_ACTION_TYPES.GET.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  }),
  [MODEL_ACTION_TYPES.POST.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  }),
  [MODEL_ACTION_TYPES.PUT.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  }),
  [MODEL_ACTION_TYPES.DELETE.SUCCESS]: (state) => ({
    ...state
  })
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(MODEL_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [
      MODEL_ACTION_TYPES.GET.START,
      MODEL_ACTION_TYPES.POST.START,
      MODEL_ACTION_TYPES.PUT.START,
      MODEL_ACTION_TYPES.DELETE.START
    ],
    successActionType: [
      MODEL_ACTION_TYPES.GET.SUCCESS,
      MODEL_ACTION_TYPES.POST.SUCCESS,
      MODEL_ACTION_TYPES.PUT.SUCCESS,
      MODEL_ACTION_TYPES.DELETE.SUCCESS
    ],
    errorActionType: [
      MODEL_ACTION_TYPES.GET.ERROR,
      MODEL_ACTION_TYPES.POST.ERROR,
      MODEL_ACTION_TYPES.PUT.ERROR,
      MODEL_ACTION_TYPES.DELETE.ERROR
    ]
  })
)(reducer);
