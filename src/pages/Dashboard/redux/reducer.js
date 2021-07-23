import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODELSLIST_ACTION_TYPES = new ActionTypes('MODELSLIST')
  .addAT()
  .listAT()
  .getActionTypes();

const initialState = {
  models: ''
};
const handleAction = {
  [MODELSLIST_ACTION_TYPES.GET.SUCCESS]: (state, params) => ({
    ...state,
    models: params.list || '',
    totalAmount: params.totalAmount || 0
  }),
  [MODELSLIST_ACTION_TYPES.POST.SUCCESS]: (state) => state
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(MODELSLIST_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [MODELSLIST_ACTION_TYPES.GET.START, MODELSLIST_ACTION_TYPES.POST.START],
    successActionType: [MODELSLIST_ACTION_TYPES.GET.SUCCESS, MODELSLIST_ACTION_TYPES.POST.SUCCESS],
    errorActionType: [MODELSLIST_ACTION_TYPES.GET.ERROR, MODELSLIST_ACTION_TYPES.POST.ERROR]
  })
)(reducer);
