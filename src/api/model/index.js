import API from 'api/restApiService';

class Model {
  getModel = ({ id }) => API.get(`/models/${id}`);

  // attachFile = (payload) => API.post(`/models/documents`, payload);
  attachFile = (payload) => console.log('PAYLOAD', payload);

  updateModel = ({ id, data }) => API.put(`/models/${id}`, data);

  createModel = ({ id, data }) => API.post(`/models/${id}`, data);

  deleteModel = ({ id }) => API.delete(`/models/${id}`);
}

export default new Model();