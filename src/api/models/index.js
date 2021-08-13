import API from 'api/restApiService';

class Models {
  getModels = (page) => {
    console.log('PAGE', page);
    return API.get(`/models?page=${page}`);
  };
}

export default new Models();
