import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODELPROFILE_ACTION_TYPES = new ActionTypes('MODELPROFILE')
  .getAT()
  .updateAT()
  .getActionTypes();

const initialState = {
  modelData: ''
};
const handleAction = {
  [MODELPROFILE_ACTION_TYPES.GET.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  }),
  [MODELPROFILE_ACTION_TYPES.PUT.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  })
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(MODELPROFILE_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [MODELPROFILE_ACTION_TYPES.GET.START, MODELPROFILE_ACTION_TYPES.PUT.START],
    successActionType: [
      MODELPROFILE_ACTION_TYPES.GET.SUCCESS,
      MODELPROFILE_ACTION_TYPES.PUT.SUCCESS
    ],
    errorActionType: [MODELPROFILE_ACTION_TYPES.GET.ERROR, MODELPROFILE_ACTION_TYPES.PUT.ERROR]
  })
)(reducer);
