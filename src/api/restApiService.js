import axios from 'axios';

class API {
  constructor(tokenName = 'token') {
    this.url = `${process.env.REACT_APP_BASE_URL}}/api`;
    // this.tokenName = tokenName;
  }

  handleSuccess = (response) => response;

  handleError = (error) => Promise.reject(error);

  create = (headers) => {
    // const cancel = axios.CancelToken.source();
    // const token = Cookies.get(this.tokenName);
    // const headerAuth = token && { Authorization: `Bearer ${token}` };
    const service = axios.create({
      headers: {
        ...headers
        // ...headerAuth
      }
      // cancelToken: cancel.token
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    return service;
  };

  get = (path = '', headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'GET',
      url: `${this.url}${path}`
    });
  };

  post = (path = '', data = {}, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'POST',
      url: `${this.url}${path}`,
      data
    });
  };

  put = (path = '', data = {}, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'PUT',
      url: `${this.url}${path}`,
      data
    });
  };
}

export default new API();
