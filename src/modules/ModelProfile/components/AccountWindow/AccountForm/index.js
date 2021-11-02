/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
// TODO: временные данные из формы систенмных настроек
import { modelAccountFormSelector } from 'modules/ModelProfile/redux/selectors';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FormTitle from 'modules/ModelProfile/components/FormTitle';
import { modelErrorsSelector } from 'redux/selectors/modelErrors';
import { staticModelDataSelector } from 'redux/selectors/staticData';
import { initialValues } from './initialValues';
import AccountFrame from './components/AccountFrame';

import { DetachServerAction } from '../../../redux/actions';

const AccountForm = ({ className }) => {
  const { id, data } = useSelector(modelAccountFormSelector);
  const { errors: dataErrors } = useSelector(modelErrorsSelector);
  const { server: servers } = useSelector(staticModelDataSelector);
  const [accounts, setAccounts] = useState(servers);
  const dispatch = useDispatch();
  console.log('che', data);
  const addAccountFrame = () => {
    setAccounts([...accounts, { ...initialValues, custom: true }]);
  };
  const handleRemoveAccountFrame = (accountId) => () => {
    dispatch(DetachServerAction(accountId));
    setAccounts(accounts.filter((account) => account.id !== accountId));
  };
  const findErrors = (accountId) => {
    const errorsId = dataErrors.find((errors) => errors.id === accountId);
    return errorsId?.errors || '';
  };

  useEffect(() => {
    const combineAccounts = accounts.reduce((acc, cur) => {
      const heh = data.find((element) => cur.title === element?.title && element);
      return [...acc, { ...cur, ...heh }];
    }, []);

    setAccounts([...combineAccounts, ...data.filter((el) => el.custom)]);
  }, [servers, data]);

  return (
    <div className={clsx(className)}>
      <FormTitle>Учетные данные</FormTitle>
      {accounts &&
        accounts.map((account) => (
          <AccountFrame
            id={id}
            key={account.title}
            removeAccountFrame={handleRemoveAccountFrame}
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
