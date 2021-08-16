import API from 'api/restApiService';

class Model {
  getModel = ({ id }) => API.get(`/models/${id}`);

  attachFile = (data) =>
    API.post(`/models/documents`, data, { 'Content-Type': 'multipart/form-data' });

  detachFile = (id) => API.delete(`/models/documents`, id);

  updateModel = ({ id, data }) => API.put(`/models/${id}`, data);

  createModel = ({ data }) => API.post(`/models`, data);

  deleteModel = ({ id }) => API.delete(`/models/${id}`);
}

export default new Model();
