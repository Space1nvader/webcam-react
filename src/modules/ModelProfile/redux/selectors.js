export const modelSelector = (state) => state.model;

export const modelIdSelector = (state) => ({
  modelId: state.model.modelData.id
});

export const modelSystemFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.system
});
export const modelPersonalFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.personal
});
export const modelDocumentsSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.personal.documents
});
export const modelDescriptionFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.description
});
export const modelAccountFormSelector = (state) => ({
  id: state.model.modelData.id,
  data: state.model.modelData.account
});
