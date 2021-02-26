import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'reactstrap';
import Table from "./Table";
import Pagination from "@material-ui/lab/Pagination";
import "../styles/PlaceInteraction.css"

const PlaceInteraction = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return(
        <>
            <h1>PlaceInteraction</h1>
            <div id="textdates">
                <p id="text">Start date:</p>
                <p id="text">End date:</p>
            </div>
            <div id="dates">  
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
            <Table />
            <div id="pagination">
                <Pagination count={10} shape="rounded" />
            </div>
        </>
    )
}
export default PlaceInteraction;