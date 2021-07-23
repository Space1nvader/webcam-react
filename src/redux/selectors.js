export const withLoading = (reducer) => (state) => ({
  isLoading: state[reducer].isLoading,
  fieldsErrors: state[reducer].fieldsErrors,
  error: state[reducer].error
});
