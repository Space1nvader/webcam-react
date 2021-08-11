import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODELPROFILE_ACTION_TYPES = new ActionTypes('DOCSPROFILE')
  .postAT()
  .deleteAT()
  .getActionTypes();

const initialState = {
  modelData: ''
};
const handleAction = {
  [MODELPROFILE_ACTION_TYPES.POST.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  }),

  [MODELPROFILE_ACTION_TYPES.DELETE.SUCCESS]: (state, params) => ({
    ...state,
    modelData: params
  })
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(MODELPROFILE_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [
      MODELPROFILE_ACTION_TYPES.POST.START,
      MODELPROFILE_ACTION_TYPES.DELETE.START
    ],
    successActionType: [
      MODELPROFILE_ACTION_TYPES.POST.START,
      MODELPROFILE_ACTION_TYPES.DELETE.START
    ],
    errorActionType: [MODELPROFILE_ACTION_TYPES.POST.START, MODELPROFILE_ACTION_TYPES.DELETE.START]
  })
)(reducer);
