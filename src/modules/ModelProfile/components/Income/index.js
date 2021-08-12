import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Effect from 'components/Effect';
import SimpleMenu from 'components/SimpleMenu';
// import { useSelector } from 'react-redux';
// import { profileSelector } from 'modules/ModelProfile/redux/selectors';
import './index.scss';

const Income = ({ ...other }) => (
  // const data = useSelector(profileSelector)
  // TODO: Сделать прибыль модели ждем бекенда
  <div className="income" {...other}>
    <div className="income__header">
      <span className="income__title">Прибыль в месяце</span>
      <SimpleMenu
        options={['312', '123', '312']}
        icon={<MoreHorizIcon style={{ fill: 'var(--indigo-30)' }} />}
      />
    </div>
    <h4 className="income__value">$7,784</h4>
    <Effect value="up">+ 20% прибыль</Effect>
  </div>
);
export default Income;
