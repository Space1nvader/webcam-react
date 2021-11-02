import API from 'api/restApiService';

class Model {
  // MODEL dATA

  getModel = ({ id }) => API.get(`/models/${id}`);

  updateModel = ({ id, data }) => API.put(`/models/${id}`, data);

  createModel = ({ data }) => API.post(`/models`, data);

  deleteModel = (data) => API.delete(`/models`, { ids: data });

  updateModelStatus = ({ id, active }) =>
    API.put(`/models/${id}/toggle-active-status?active=${active}`);

  // MODEL FILES

  attachFile = (data) =>
    API.post(`/models/documents`, data, { 'Content-Type': 'multipart/form-data' });

  detachFile = (id) => API.delete(`/models/documents`, { id });

  // MODEL SERVERS

  attachServer = (data) => API.post(`/models/servers`, data);

  detachServer = (id) => API.delete(`/models/servers`, { id });
}

export default new Model();
