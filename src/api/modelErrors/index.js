// import API from 'api/restApiService';
const data = {
  errors: [
    {
      id: 1,
      errors: [{ title: 'Тест ошибки', text: 'Сообщение об ошибке' }]
    },
    {
      id: 2,
      errors: [
        {
          title: 'Ошибка №22233',
          text: 'Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com'
        },
        { title: 'Ошибка №21233', text: 'Неверный пароль при регистрации на сайте jasmin.com' }
      ]
    }
  ]
};
class ModelErrors {
  getModelErrors = () => ({ data });
}

export default new ModelErrors();
