// import API from 'api/restApiService';
const data = {
  errors: [
    {
      id: 1,
      errors: [{ title: 'Тест ошибки', text: 'Сообщение об ошибке', checked: true }]
    },
    {
      id: 2,
      errors: [
        {
          title: 'Ошибка №22233',
          text: 'Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com Неверный пароль при регистрации на сайте jasmin.com',
          checked: true
        },
        {
          title: 'Ошибка №33',
          text: 'Неверный пароль при регистрации на сайте jasmin.com 1',
          checked: false
        },
        {
          title: 'Ошибка №2222233',
          text: 'Неверный пароль при регистрации на сайте jasmin.com',
          checked: false
        },
        {
          title: 'Ошибка №21123377',
          text: 'Неверный пароль при регистрации  регистрации регистрации регистрации регистрации регистрации на сайте jasmin.com',
          checked: false
        }
      ]
    }
  ]
};
class ModelErrors {
  getModelErrors = () => ({ data });
}

export default new ModelErrors();
