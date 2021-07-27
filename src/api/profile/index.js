import API from 'api/restApiService';

class Profile {
  getProfile = (id) => API.get(`/models/${id}`);
}

export default new Profile();
