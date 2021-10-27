import React, { useState } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
// TODO: временные данные из формы систенмных настроек
import { modelAccountFormSelector } from 'modules/ModelProfile/redux/selectors';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import { modelErrorsSelector } from 'redux/selectors/modelErrors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { initialValues } from './initialValues';
import AccountFrame from './components/AccountFrame';

// const placeholders = [
//   {
//     title: 'Chaturbate',
//     active: false,
//     login: '',
//     serverId: '',
//     password: '',
//     updatedAt: ''
//   },
//   {
//     title: 'Jasmin',
//     active: false,
//     login: '',
//     serverId: '',
//     password: '',
//     updatedAt: ''
//   }
// ];

const AccountForm = ({ className, children }) => {
  // TODO: временные данные из формы систенмных настроек
  const { id, data } = useSelector(modelAccountFormSelector);
  const { errors: dataErrors } = useSelector(modelErrorsSelector);
  const { server } = useSelector(staticModelDataSelector);
  console.log(server);
  const [accounts, setAccounts] = useState(data);
  const addAccountFrame = () => {
    setAccounts([...accounts, ...initialValues.account]);
  };
  const findErrors = (accountId) => {
    const errorsId = dataErrors.find((errors) => errors.id === accountId);
    return errorsId?.errors || '';
  };
  const generatedAccounts = [...placeholders, ...accounts];
  return (
    <div className={clsx(className)}>
      <FormTitle>Учетные данные</FormTitle>
      {generatedAccounts &&
        generatedAccounts.map((account) => (
          <AccountFrame
            id={id}
            key={account.title}
            errors={findErrors(account.id)}
            data={account}
            initialValues={initialValues}
          />
        ))}
      <IconBtn
        title="Добавить модель"
        onClick={addAccountFrame}
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
