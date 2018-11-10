import React from 'react';
import ButtonDownload from './../SmallContainers/ButtonDownload';


const LabelContainer = ({label, valueLabel}) => {
    return (
        <div>
            <div className="label__container"> 
            <h3 >{label}:</h3>
            <label>{valueLabel}</label>
            <div><ButtonDownload label={label} data={valueLabel} /></div> 
            </div>
            <div className="label__line"> </div>
        </div>
    )
}

export default LabelContainer 