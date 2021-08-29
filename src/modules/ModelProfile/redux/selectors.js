export const modelSelector = (state) => state.model;

export const modelSystemFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.system
});
export const modelPersonalFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.personal
});
export const modelDescriptionFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.personal
});
export const modelAccountFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.account
});
