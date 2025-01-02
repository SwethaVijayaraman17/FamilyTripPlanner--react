import React from "react";

const PlannerTable = (props) =>{

    const {plannerArr} = props;
    return(
        <table id='tripTable'>
            <thead>
                <th>Destination</th>
                <th>No. of days</th>
                <th>Date</th>
                <th>No. of Travellers</th>
            </thead>
            {plannerArr.map((ele, idx) =>(
                <tr id={`row${idx+1}`}>
                    <td id={`des${idx+1}`}>{ele.destination}</td>
                    <td id={`days${idx+1}`}>{ele.days}</td>
                    <td id={`date${idx+1}`}>{ele.date}</td>
                    <td id={`travellers${idx+1}`}>{ele.travellers}</td>
                </tr>
            ))}
        </table>
    )
}

export default PlannerTable;