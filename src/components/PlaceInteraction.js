import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'reactstrap';
import "../styles/PlaceInteraction.css";

const PlaceInteraction = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return(
        <>
            <h1>PlaceInteraction</h1>
            <div id="dates">
                    <div className="text">Start date:</div>
                    <DatePicker id="date"
                        selected={selectedDate} 
                        onChange={date => setSelectedDate(date)} 
                        dateFormat="dd/MM/yyyy"

                    />
                    <div className="text">End date:</div>
                    <DatePicker id="date"
                        selected={selectedDate} 
                        onChange={date => setSelectedDate(date)} 
                        dateFormat="dd/MM/yyyy"

                    />
                <Button id="search">Search</Button>
            </div>
        </>
    )
}
export default PlaceInteraction;