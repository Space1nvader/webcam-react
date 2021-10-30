/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
// TODO: временные данные из формы систенмных настроек
import { modelAccountFormSelector } from 'modules/ModelProfile/redux/selectors';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import { modelErrorsSelector } from 'redux/selectors/modelErrors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { initialValues, placeholders } from './initialValues';
import AccountFrame from './components/AccountFrame';

const AccountForm = ({ className, children }) => {
  // TODO: временные данные из формы систенмных настроек
  const { id, data } = useSelector(modelAccountFormSelector);
  const { errors: dataErrors } = useSelector(modelErrorsSelector);
  const { server: servers } = useSelector(staticModelDataSelector);
  const [accounts, setAccounts] = useState(placeholders);
  const addAccountFrame = () => {
    setAccounts([...accounts, { ...initialValues('test'), custom: true }]);
  };
  const findErrors = (accountId) => {
    const errorsId = dataErrors.find((errors) => errors.id === accountId);
    return errorsId?.errors || '';
  };

  useEffect(() => {
    const tests = [
      {
        id: 0,
        title: 'Chatur',
        password: 'chatur-123',
        login: 'Chtur-log'
      },
      {
        id: 1,
        title: 'Jasmin',
        password: 'Jasmin-321',
        login: 'Jasmin-log'
      },
      {
        id: 2,
        title: 'server2',
        password: 'ser',
        login: 'ser',
        custom: true
      },
      {
        id: 3,
        title: 'server3',
        password: 'ser1',
        login: 'ser1',
        custom: true
      }
    ];
    const combineAccounts = accounts.reduce((acc, cur, index) => {
      if (cur.title === tests[index]?.title) {
        return [...acc, { ...cur, ...tests[index] }];
      }
      return [...acc, cur];
    }, []);

    setAccounts([...combineAccounts, ...tests.filter((el) => el.custom)]);
  }, []);

  return (
    <div className={clsx(className)}>
      <FormTitle>Учетные данные</FormTitle>
      {accounts &&
        accounts.map((account) => (
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
