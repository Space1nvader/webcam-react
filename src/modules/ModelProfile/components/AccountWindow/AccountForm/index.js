import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
// TODO: временные данные из формы систенмных настроек
import { modelSystemFormSelector } from 'modules/ModelProfile/redux/selectors';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import { modelErrorsSelector } from 'redux/selectors/modelErrors';
import { initialValues } from './initialValues';
import AccountFrame from './components/AccountFrame';

const accounts = [
  {
    id: 1,
    server: 'Chaturbate',
    active: true,
    login: 'chaturbate-login',
    serverId: '1',
    password: 'chaturbate-password'
  },
  {
    id: 2,
    server: 'Jasmin',
    active: false,
    login: 'jasmin-login',
    serverId: '2',
    password: 'jasmin-password'
  }
];

const AccountForm = ({ className }) => {
  // TODO: временные данные из формы систенмных настроек
  const { id, data } = useSelector(modelSystemFormSelector);
  const { errors: dataErrors } = useSelector(modelErrorsSelector);

  const findErrors = (accountId) => {
    const errorsId = dataErrors.find((errors) => errors.id === accountId);
    return errorsId?.errors || '';
  };

  return (
    <div className={clsx(className)}>
      <FormTitle>Учетные данные</FormTitle>
      {accounts &&
        accounts.map((account) => (
          <AccountFrame
            id={id}
            errors={findErrors(account.id)}
            data={data[account.id]}
            initialValues={initialValues}
          />
        ))}

      <IconBtn
        title="Добавить модель"
        style={{
          backgroundColor: 'var(--red-60)',
          height: 50,
          display: 'block',
          margin: '0 auto',
          width: 50,
          boxShadow: '0px 2px 4px rgba(156, 43, 35, 0.2), 0px 4px 8px rgba(244, 67, 54, 0.2)'
        }}
      >
        <AddRoundedIcon style={{ fill: '#fff' }} />
      </IconBtn>
    </div>
  );
};

export default AccountForm;
