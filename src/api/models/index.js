import API from 'api/restApiService';

class Models {
  getModels = () => API.get('/models');
}

export default new Models();
