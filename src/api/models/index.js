import API from 'api/restApiService';

class Models {
  getModels = ({ page, search }) => {
    const sendPage = page + 1;
    const sendSearch = search ? `&search=${search}` : '';
    return API.get(`/models?page=${sendPage}${sendSearch}`);
  };

  deleteModels = (data) => API.delete(`/models`, { ids: data });
}

export default new Models();
