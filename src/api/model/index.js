import API from 'api/restApiService';

class Model {
  getModel = ({ id }) => API.get(`/models/${id}`);
}

export default new Model();
