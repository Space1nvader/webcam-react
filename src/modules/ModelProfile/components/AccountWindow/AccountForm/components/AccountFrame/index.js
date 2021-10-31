import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { FormContainer } from 'components/Form/FormContainer';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import { makeStyles } from '@material-ui/core/styles';
import FieldSet from 'components/Form/FieldSet';
import { TextField, PasswordField } from 'components/Form';
import ActiveToggle from 'components/ActiveToggle';
import { checkValueEmpty } from 'utils';
import IconBtn from 'components/IconBtn';
import { AttachServerAction } from 'modules/ModelProfile/redux/actions';
import { format, fromUnixTime } from 'date-fns';
import SessionStatus from 'components/SessionStatus';
import { ACCOUNT_VALIDATION_SCHEMA } from '../../validateSchema';
import AccountErrors from '../AccontErrors';
import { generateFieldPrefix, removeFieldPrefix } from '../../utils';
import RemoveFrame from './RemoveFrame';
import style from './style';
import './index.scss';

const useStyles = makeStyles(style);

const AccountFrame = (props) => {
  const { data, id, errors, initialValues } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const generateInitialValues = checkValueEmpty(
    generateFieldPrefix(data, `${data.title}-`),
    generateFieldPrefix(initialValues, `${data.title}-`)
  );
  const onSubmit = (values) => {
    console.log(values);
    const sendData = removeFieldPrefix(values, `${data.title}-`);
    dispatch(AttachServerAction({ modelId: id, ...sendData }));
  };
  const handleRefreshRequest = () => {
    // TODO: Запрос на обновление данных
    console.log(id);
  };
  const generateFieldName = (field) => `${data.title}-${field}`;
  const created = !data.custom;
  return (
    <FormContainer
      enableReinitialize
      initialValues={generateInitialValues}
      validationSchema={ACCOUNT_VALIDATION_SCHEMA(data.title)}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <div className="accountFrame">
          <div className="accountFrame__row">
            <div className="accountFrame__info">
              <h6 className="accountFrame__title">{values[generateFieldName('title')]}</h6>
              {/* TODO: STATUS TAg  */}
              {created && (
                <div className="accountFrame__tags">
                  <SessionStatus style={{ fontSize: 12, fontWeight: 500 }} value="offline" />
                </div>
              )}
            </div>
            {!created && <RemoveFrame />}
          </div>
          <FieldSet style={{ marginBottom: 0 }}>
            <TextField label="Имя сервера" name={generateFieldName('title')} disabled={created} />
            <TextField label="login" name={generateFieldName('login')} />
            <TextField label="ID сервера" name={generateFieldName('id')} />
            <PasswordField label="Пароль" autoComplete="on" name={generateFieldName('password')} />
            <div className="accountFrame__formControls">
              <Button
                color="secondary"
                type="submit"
                title="Сохранить изменения"
                className={classes.button}
                variant="contained"
              >
                сохранить
              </Button>
              <Button
                className={classes.button}
                type="reset"
                title="Отменить изменения"
                variant="contained"
              >
                отменить
              </Button>
            </div>
            {created && (
              <div className="accountFrame__controls">
                <div className="accountFrame__update">
                  <IconBtn
                    onClick={handleRefreshRequest}
                    title="Обновить"
                    style={{ marginRight: 12 }}
                  >
                    <RefreshRoundedIcon style={{ fill: 'var(--gray-30)' }} />
                  </IconBtn>
                  {!!data?.updatedAt &&
                    `Обновлен: ${format(fromUnixTime(data.updatedAt), 'dd.MM.yyyy')}`}
                </div>
                <ActiveToggle label="Активна" id={data.id} />
              </div>
            )}
            {!!errors?.length && <AccountErrors className="accountFrame__errors" errors={errors} />}
          </FieldSet>
        </div>
      )}
    </FormContainer>
  );
};

export default AccountFrame;
