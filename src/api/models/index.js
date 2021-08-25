import API from 'api/restApiService';

class Models {
  getModels = (page = 0) => API.get(`/models?page=${page}`);

  deleteModels = (data) => API.delete(`/models`, { ids: data });
}

export default new Models();
