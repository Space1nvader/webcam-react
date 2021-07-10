import React from 'react'

const DocsForm = (props) => {
    const { className, ...other } = props;
    return <div className={className} {...other}>доки</div>
}
    
export default DocsForm
