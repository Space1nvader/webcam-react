import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { FormContainer } from 'components/Form/FormContainer';
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import { makeStyles } from '@material-ui/core/styles';
import FieldSet from 'components/Form/FieldSet';
import { TextField, PasswordField } from 'components/Form';
import ActiveToggle from 'components/ActiveToggle';
import { checkValueEmpty, filterChangesValues } from 'utils';
import setSubmitForm from 'modules/ModelProfile/setSubmitForm';
import IconBtn from 'components/IconBtn';
import { format, fromUnixTime } from 'date-fns';
import SessionStatus from 'components/SessionStatus';
import { ACCOUNT_VALIDATION_SCHEMA } from '../../validateSchema';
import AccountErrors from '../AccontErrors';
import RemoveFrame from './RemoveFrame';
import style from './style';
import './index.scss';

const useStyles = makeStyles(style);

const AccountFrame = (props) => {
  const { id, data, errors, initialValues } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const generateInitialValues = checkValueEmpty(data, initialValues);
  const onSubmit = (values) => {
    const filtredValues = filterChangesValues(values, generateInitialValues);
    dispatch(setSubmitForm(id, filtredValues));
  };
  const handleRefreshRequest = () => {
    // TODO: Запрос на обновление данных
    console.log(id);
  };
  return (
    <FormContainer
      enableReinitialize
      initialValues={generateInitialValues}
      validationSchema={ACCOUNT_VALIDATION_SCHEMA}
      onSubmit={onSubmit}
    >
      {({ values, submitForm }) => (
        <div className="accountFrame">
          <div className="accountFrame__row">
            <div className="accountFrame__info">
              <h6 className="accountFrame__title">{values.server}</h6>
              {/* TODO: STATUS TAg  */}
              <div className="accountFrame__tags">
                <SessionStatus style={{ fontSize: 12, fontWeight: 500 }} value="offline" />
              </div>
            </div>
            {!values?.id && <RemoveFrame />}
          </div>
          <FieldSet style={{ marginBottom: 0 }}>
            <TextField label="Имя сервера" name="server" disabled={!!values?.id} />
            <TextField name="login" label="Login" />
            <TextField name="serverId" label="ID сервера" />
            <PasswordField label="Пароль" name="password" />
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
            {!!values.id && (
              <div className="accountFrame__controls">
                <div className="accountFrame__update">
                  <IconBtn
                    onClick={handleRefreshRequest}
                    title="Обновить"
                    style={{ marginRight: 12 }}
                  >
                    <RefreshRoundedIcon style={{ fill: 'var(--gray-30)' }} />
                  </IconBtn>
                  {!!values?.updatedAt &&
                    `Обновлен: ${format(fromUnixTime(data.updatedAt), 'dd.MM.yyyy')}`}
                </div>
                <ActiveToggle label="Активна" id={id} />
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
