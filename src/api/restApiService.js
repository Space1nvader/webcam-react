import axios from 'axios';

class API {
  constructor(tokenName = 'token') {
    this.url = process.env.REACT_APP_BASE_URL ? `${process.env.REACT_APP_BASE_URL}/api` : '/api';
    this.tokenName = tokenName;
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

  delete = (path = '', data = {}, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'DELETE',
      url: `${this.url}${path}`,
      data
    });
  };

  // sse = (path = '') => {
  //   const eventSource = new EventSource(`${this.url}${path}`);

  //   eventSource.onmessage = function (event) {
  //     console.log('Новое сообщение', event.data);
  //     // этот код выведет в консоль 3 сообщения, из потока данных выше
  //   };
  // };
}

export default new API();
