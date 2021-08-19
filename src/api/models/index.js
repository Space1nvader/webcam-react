import API from 'api/restApiService';

class Models {
  getModels = (page) => API.get(`/models?page=${page}`);

  deleteModels = (data) => API.delete(`/models`, data);
}

export default new Models();
