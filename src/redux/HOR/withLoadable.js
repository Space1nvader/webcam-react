export const isLoadingReducer = (state) => ({
  ...state,
  message: null,
  isLoading: true,
  success: null
});

export const successReducer = (state, action) => ({
  ...state,
  isLoading: false,
  success: true,
  message: action.payload.detail
});

export const errorReducer = (state, action) => ({
  ...state,
  isLoading: false,
  success: false,
  message: action.payload.detail
});

export const INITIAL_LOADABLE_STATE = {
  message: null,
  isLoading: false,
  success: null
};

export const resetReducer = (state) => ({
  ...state,
  ...INITIAL_LOADABLE_STATE
});

export const noopReducer = (state) => state;

export const withLoadable = (actionTypes) => {
  const actionReducerMap = {};

  actionTypes.isLoadingActionType.forEach((item) => {
    actionReducerMap[item] = isLoadingReducer;
  });

  actionTypes.successActionType.forEach((item) => {
    actionReducerMap[item] = successReducer;
  });

  actionTypes.errorActionType.forEach((item) => {
    actionReducerMap[item] = errorReducer;
  });

  return (baseReducer) => (state, action) => {
    const reducerFunction = actionReducerMap[action.type] || noopReducer;

    const newState = reducerFunction(state, action);

    return baseReducer(newState, action);
  };
};
