import React from 'react'
import "../styles/Table.css";

const Table = () => {
    return(
        <>
            <table className="table" id="table">
                <tr className="tableRow">
                    <th>Licence no.</th>
                    <th>Time</th>
                    <th>Coordinates</th>
                </tr>
                <tr>
                    <td>B12C3D</td>
                    <td>25th Feb 2021</td>
                    <td>Coordinates</td>
                </tr>
            </table>
        </>
    )
}

export default Table;