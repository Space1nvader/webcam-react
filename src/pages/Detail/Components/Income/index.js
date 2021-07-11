import React from 'react';
import IconButton from 'components/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './index.scss';
import Effect from 'components/Effect';

const Income = (props) => {
    const { ...other } = props;
    return (
        <div className="income" {...other}>
        <div className="income__header">
          <span className="income__title">Прибыль в месяце</span>
                <IconButton>
                    <MoreHorizIcon style={{fill: 'var(--indigo-30)'}}/>
          </IconButton>
          
            </div>
            <h4 className="income__value">
            $7,784
            </h4>
            <Effect value="up"/>
            <Effect />
</div>
    )
}

export default Income
