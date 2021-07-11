import React from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Effect = (props) => {
    const { value, ...other } = props;
    const setValue = () => {
        if (value === 'up') {
            return <ArrowDropUpIcon style={{stroke: 'var(green-20)'}}/>
        } 
           return <ArrowDropDownIcon style={{ fill: 'var(red-20)' }} />   
    }
    return (
        <div {...other}>
            {setValue()}
        </div>
    )
}

export default Effect