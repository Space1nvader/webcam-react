import API from 'api';

class ModelsApi {
  getModels = (payload) => API.get('/models', payload);
}

export default new ModelsApi();
