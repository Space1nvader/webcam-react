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
import { initialValues } from './initialValues';
import AccountFrame from './components/AccountFrame';

const AccountForm = ({ className, children }) => {
  const tests = [
    {
      id: 0,
      title: 'Chatur',
      password: 'chatur-123',
      login: 'chtur-log'
    },
    {
      id: 1,
      title: 'Jasmin',
      password: 'jasmin-321',
      login: 'jas-log'
    },
    {
      id: 2,
      title: 'server2',
      password: 'ser',
      login: 'ser',
      custom: true
    }
  ];
  // TODO: временные данные из формы систенмных настроек
  const { id, data } = useSelector(modelAccountFormSelector);
  const { errors: dataErrors } = useSelector(modelErrorsSelector);
  const { server: servers } = useSelector(staticModelDataSelector);
  const [accounts, setAccounts] = useState(tests);
  const addAccountFrame = () => {
    setAccounts([...accounts, ...initialValues.account]);
  };
  const findErrors = (accountId) => {
    const errorsId = dataErrors.find((errors) => errors.id === accountId);
    return errorsId?.errors || '';
  };

  const placeholders = [
    {
      title: 'Chatur'
    },
    {
      title: 'Jasmin'
    },
    {
      title: 'hui'
    },
    { title: 'test3' }
  ];

  useEffect(() => {
    // console.log(
    //   tests.reduce((acc, test, index) => {
    //     if (cur.title === placeholders[index].title) {
    //       return [...acc, { ...test, ...placeholders[index] }];
    //     }
    //     return [...acc, test, placeholders[index]];
    //   }, [])
    // );
    // const otherAccounts = tests.map((test) =>
    //   placeholders.filter((holder) => {
    //     if (test.title !== holder.title) {
    //       console.log(test);
    //       return test;
    //     }
    //     return undefined;
    //   })
    // );
    // console.log(otherAccounts);
    // tests.map((test) =>
    //   placeholders.find((holder) => {
    //     if (holder.title !== test.title) {
    //       return { ...test, ...holder };
    //     }
    //     return false;
    //   })
    // )
    //   [...placeholders, ...tests].map((account) =>
    //     tests.find((test) => {
    //       if (account.title === test.title) {
    //         return { ...test, ...account };
    //       }
    //       setAccounts([...accounts]);
    //       return false;
    //     })
    //   )
    // setAccounts(combineAccounts);
    // console.log(combineAccounts);
  }, []);
  // const generatedAccounts = () =>
  //   placeholder.map((holder) =>
  //     tests.find((test) => {
  //       if (holder.title === test.title) {
  //         // console.log({ ...holder, ...test });
  //         return { ...holder, ...test };
  //       }
  //       // console.log('net takova', test.title);
  //       return false;
  //     })
  //   );
  // console.log(generatedAccounts());
  // servers.filter((server) => !data.some((el) => server.title === el.title));

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
