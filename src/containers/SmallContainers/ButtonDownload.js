import React from 'react';
import { CSVLink } from "react-csv";


const ButtonDownload = ({data, type, label})=> {
    let csvData;

    if (typeof(data)=== "object") {
        csvData = [];
        for (let flights of data.props.dataFlight ) {
            csvData.push( {
                manufacturer : flights.manufacturer,
                model : flights.model,
                time: flights.flights.reduce((reducer, data) => reducer + data.duration,0)
            })
        }
    } else if (data){
        if (typeof(data)=== "string"){
            csvData= `${label}:${data}`;

        } else {
            csvData= "ss";

        }

    }
    
    return <CSVLink data={csvData}> &#9660; </CSVLink>;


}

export default ButtonDownload