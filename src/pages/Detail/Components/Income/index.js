import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Effect from 'components/Effect';
import SimpleMenu from 'components/SimpleMenu';
import './index.scss';

const Income = (props) => {
  const { ...other } = props;
  return (
    <div className="income" {...other}>
      <div className="income__header">
        <span className="income__title">Прибыль в месяце</span>
        <SimpleMenu icon={<MoreHorizIcon style={{ fill: 'var(--indigo-30)' }} />}>
          {['312', '123', '312']}
        </SimpleMenu>
      </div>
      <h4 className="income__value">$7,784</h4>
      <Effect value="up">+ 20% прибыль</Effect>
    </div>
  );
};

export default Income;
