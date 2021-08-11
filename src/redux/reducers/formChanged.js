export const FORMCHANGED_ACTION = 'FORMCHANGED_ACTION';

const initialState = false;

const handleAction = {
  [FORMCHANGED_ACTION]: (state = initialState, params) => ({
    ...state,
    formChanged: params
  })
};

export const formChangedReducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;
