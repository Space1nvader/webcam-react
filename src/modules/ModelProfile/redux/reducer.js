import HOR from 'redux/HOR';
import { ActionTypes } from 'redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MODEL_ACTION_TYPES = new ActionTypes('MODEL')
  .getAT()
  .updateAT()
  .postAT()
  .deleteAT()
  .getActionTypes();
export const MODEL_DOCUMENTS_ACTION_TYPES = new ActionTypes('MODEL_DOCS')
  .postAT()
  .deleteAT()
  .getActionTypes();
export const MODEL_STATUS_ACTION_TYPES = new ActionTypes('MODEL_STATUS')
  .updateAT()
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
  [MODEL_ACTION_TYPES.PUT.SUCCESS]: (state) => ({
    ...state
  }),
  [MODEL_ACTION_TYPES.DELETE.SUCCESS]: (state) => ({
    ...state
  }),
  [MODEL_STATUS_ACTION_TYPES.PUT.SUCCESS]: (state) => ({
    ...state
  }),
  [MODEL_DOCUMENTS_ACTION_TYPES.POST.SUCCESS]: (state, params) => ({
    ...state,
    modelData: {
      ...state.modelData,
      personal: {
        ...state.modelData.personal,
        documents: [...state.modelData.personal.documents.concat(params)]
      }
    }
  }),
  [MODEL_DOCUMENTS_ACTION_TYPES.DELETE.SUCCESS]: (state, params) => ({
    ...state,
    modelData: {
      ...state.modelData,
      personal: {
        ...state.modelData.personal,
        documents: [...state.modelData.personal.documents.filter((el) => el.id !== params)]
      }
    }
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
      MODEL_ACTION_TYPES.DELETE.START,
      MODEL_DOCUMENTS_ACTION_TYPES.POST.START,
      MODEL_DOCUMENTS_ACTION_TYPES.DELETE.START,
      MODEL_STATUS_ACTION_TYPES.PUT.START
    ],
    successActionType: [
      MODEL_ACTION_TYPES.GET.SUCCESS,
      MODEL_ACTION_TYPES.POST.SUCCESS,
      MODEL_ACTION_TYPES.PUT.SUCCESS,
      MODEL_ACTION_TYPES.DELETE.SUCCESS,
      MODEL_DOCUMENTS_ACTION_TYPES.POST.SUCCESS,
      MODEL_DOCUMENTS_ACTION_TYPES.DELETE.SUCCESS,
      MODEL_STATUS_ACTION_TYPES.PUT.SUCCESS
    ],
    errorActionType: [
      MODEL_ACTION_TYPES.GET.ERROR,
      MODEL_ACTION_TYPES.POST.ERROR,
      MODEL_ACTION_TYPES.PUT.ERROR,
      MODEL_ACTION_TYPES.DELETE.ERROR,
      MODEL_DOCUMENTS_ACTION_TYPES.POST.ERROR,
      MODEL_DOCUMENTS_ACTION_TYPES.DELETE.ERROR,
      MODEL_STATUS_ACTION_TYPES.PUT.ERROR
    ]
  })
)(reducer);
