import { generateFieldName } from './generageFieldNames';

const initial = {
  title: '',
  active: false,
  idServer: '',
  login: '',
  serverId: '',
  password: ''
};

export const initialValues = (prefix) => generateFieldName(initial, prefix);
