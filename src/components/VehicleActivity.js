import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'reactstrap';
import "../styles/VehicleActivity.css";

const VehicleActivity = () => {
    const [licence, setLicence] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return(
        <>
            <h1>VehicleActivity</h1>
            <div id="textdates">
                <p id="text">Licence No:</p>
                <p id="text">Start date:</p>
                <p id="text">End date:</p>
            </div>
            <div id="dates">
                <input id="date" type="text" name="licence" value={licence} />  
                <DatePicker id="date"
                    selected={startDate} 
                    onChange={date => setStartDate(date)} 
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                />
                <DatePicker id="date"
                    selected={endDate} 
                    onChange={date => setEndDate(date)} 
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                />
                <Button id="search">Search</Button>
            </div>
                
        </>
    )
}
export default VehicleActivity;