import API from 'api/restApiService';

class Model {
  getModel = ({ id }) => API.get(`/models/${id}`);

  attachFile = (data) =>
    API.post(`/models/documents`, data, { 'Content-Type': 'multipart/form-data' });

  detachFile = (id) => API.delete(`/models/documents`, id);

  updateModel = ({ id, data }) => API.put(`/models/${id}`, data);

  updateModelStatus = ({ id, active }) =>
    API.put(`/models/${id}/toggle-active-status?active=${active}`);

  createModel = ({ data }) => API.post(`/models`, data);

  deleteModel = (data) => API.delete(`/models`, { ids: data });
}

export default new Model();
