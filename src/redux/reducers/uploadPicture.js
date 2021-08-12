import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const UPLOAD_PICTURE_ACTION_TYPES = new ActionTypes('UPLOAD_PICTURE')
  .postAT()
  .getActionTypes();

const initialState = {
  picture: ''
};
const handleAction = {
  [UPLOAD_PICTURE_ACTION_TYPES.POST.SUCCESS]: (state, params) => ({
    ...state,
    picture: params
  })
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(UPLOAD_PICTURE_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [UPLOAD_PICTURE_ACTION_TYPES.POST.START],
    successActionType: [UPLOAD_PICTURE_ACTION_TYPES.POST.SUCCESS],
    errorActionType: [UPLOAD_PICTURE_ACTION_TYPES.POST.ERROR]
  })
)(reducer);
