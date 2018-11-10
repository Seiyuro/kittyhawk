import React from 'react';
import LabelContainer from './SmallContainers/LabelContainer'
import TotalFlights from './SmallContainers/TotalFlights'


const BodyContainer = ({users}) => {
    let labels;
    const convertTime = time => {
        // To convert to a readableTimes
        let seconds = time * 60;
        let numdays = Math.floor(seconds / 86400);
        let numhours = Math.floor((seconds % 86400) / 3600);
        let numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
        return numdays + " days " + numhours + " hours " + numminutes + " minutes ";
    }

    const totalTime = ArrayTimes => {
        //Reduce all the times that I Got.
        return convertTime(ArrayTimes.reduce((reducer,data) => reducer + data.duration,0));
    }

    const manufacturer = (dataManufacturer, type) => {
       return  <TotalFlights dataFlight={dataManufacturer} convertTime={convertTime} type={type}/>
    }

    if (users.account) {
        labels = (
                <div>
                <LabelContainer label="Name" valueLabel={users.account.name} />
                <LabelContainer label="Email" valueLabel={users.account.owner.email} /> 
                <LabelContainer label="# Fligths" valueLabel={users.account.flights.length} /> 
                <LabelContainer label="Total Time" valueLabel={totalTime(users.account.flights)} />       
                <LabelContainer label="Air Craft by Manufacturer" valueLabel={manufacturer(users.account.aircraft, "manufacturer")} />       
                <LabelContainer label="Air Craft by Model" valueLabel={manufacturer(users.account.aircraft, "model")} />       
                </div> 
        )
    } else {
        labels = ('Now Loading...')
    }

    return (
        <div> 
            <h2 className="box__header">Pilot Overview </h2>
            {labels}
        </div>
    )
}

export default BodyContainer