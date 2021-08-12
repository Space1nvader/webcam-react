import API from 'api/restApiService';

class Picture {
  uploadPicture = (data) => API.post(`/upload`, data, { 'Content-Type': 'multipart/form-data' });
}

export default new Picture();
