import React from 'react';
import ButtonDownload from './../SmallContainers/ButtonDownload';

const TotalFlights = ({dataFlight, convertTime, type}) => {
    let getManufacturer = dataFlight.map(data => data[type]);
    let filterManufacturer = getManufacturer.filter((item, index) => getManufacturer.indexOf(item) >= index);

    let totalTime = (filterCategory) => {
        let arraySum = [];
        let sumTime = dataFlight.filter(data => {
            if (data[type] === filterCategory){ 
                if (data.flights) {
                    return data.flights
                }
            }
        })
        for (let flight in sumTime) {
            let reducerNum = sumTime[flight].flights.reduce((reducer, data) => data.duration + reducer,0);
            if (reducerNum > 0) {
                arraySum.push(reducerNum);
            }
        }
        if (arraySum.length > 0) {
            return convertTime(arraySum.reduce((reducer, data) => reducer + data,0));  
        }

        return "No Flight Time"
    }

    return (
        <div>{filterManufacturer.map(data => 
            <div key={data} className={`js-${type}`}> 
                {data}=> {totalTime(data)}
                <ButtonDownload data={totalTime(data)} type={""} label={data}/> 
            </div>)} 
        </div>

    );

} 

export default TotalFlights

