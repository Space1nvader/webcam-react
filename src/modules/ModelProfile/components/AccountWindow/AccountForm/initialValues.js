import { generateFieldNames } from './generageFieldNames';

const initial = {
  title: '',
  active: false,
  login: '',
  serverId: '',
  password: ''
};
export const placeholders = [
  {
    title: 'Chatur'
  },
  {
    title: 'Jasmin'
  }
];
export const initialValues = (prefix) => generateFieldNames(initial, prefix);
