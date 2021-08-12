import API from 'api/restApiService';

class StaticData {
  getStaticData = () => API.get('/dictionary');
}

export default new StaticData();
