import { ActionTypes } from 'redux/utils/actionCreator';

export const MODEL_FORM_ACTION_TYPES = new ActionTypes('MODEL_FORM', [
  'CHANGED',
  'CONFIRM',
  'CURRENT_TAB',
  'RESET_CONFIRM'
]).getActionTypes();

const initialState = {
  currentTab: 0,
  formChanged: false,
  confirmModal: { active: false, route: 0 }
};

const handleAction = {
  [MODEL_FORM_ACTION_TYPES.CHANGED]: (state, params) => ({
    ...state,
    formChanged: params
  }),
  [MODEL_FORM_ACTION_TYPES.CONFIRM]: (state, params) => ({
    ...state,
    confirmModal: params
  }),
  [MODEL_FORM_ACTION_TYPES.CURRENT_TAB]: (state, params) => ({
    ...state,
    currentTab: params,
    confirmModal: initialState.confirmModal
  }),
  [MODEL_FORM_ACTION_TYPES.RESET_CONFIRM]: (state) => ({
    ...state,
    confirmModal: initialState.confirmModal
  })
};

export const ModelFormReducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;
