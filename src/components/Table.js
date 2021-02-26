import React from 'react'
import "../styles/Table.css";

const Table = (props) => {
    console.log("Table",props.vehicleData);
    return(
        <>
            <table className="table" id="table">
                <tr className="tableRow">
                    <th id="tabletext">Licence no.</th>
                    <th id="tabletext">Time</th>
                    <th id="tabletext">Coordinates</th>
                </tr>
                {
                    props.vehicleData.filter((val, idx) => (
                        idx < 10
                    )).map((val, idx) => (
                        <tr>
                            <td id="tabletext">{val.license_number}</td>
                            <td id="tabletext">{val.time}</td>
                            <td id="tabletext">
                                <p>{`Latitude: ${val.latitude}`}</p>
                                <p>{`Longitude: ${val.longitude}`}</p>
                            </td>
                        </tr>
                    ))
                }
            </table>            
        </>
    )
}

export default Table;