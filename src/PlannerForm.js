import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlannerForm = (props) => {

    const { setPlannerArr } = props;
    const navigate = useNavigate();
    const [success, setsuccess] = useState('')

    const [input, setInput] = useState({
        destination: '',
        date: '',
        days: '',
        travellers: ''
    })

    const handleValueChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = () => {
        setPlannerArr(current => [...current, input]);
        setsuccess('Trip added successfully !!!')
    }

    const handleBack = () => {
        navigate('/')
    }
    return (
        <>
            <form id='form'>
                <label>Destination</label>
                <input name='destination' id='destination' onChange={(e) => handleValueChange(e)} />
                <label>Date</label>
                <input onChange={(e) => handleValueChange(e)} type='date' name='date' id='date' />
                <label>No. of Days</label>
                <input onChange={(e) => handleValueChange(e)} name='days' id='days' />
                <label>Travellers</label>
                <input onChange={(e) => handleValueChange(e)} name='travellers' id='travellers' />
                <button type='button' id='addTripBtn' onClick={handleFormSubmit}>Add to Trip Plan</button>
                <div id='success'>{success}</div>
            </form>
            <button id='backBtn' onClick={handleBack}>Back</button>
        </>
    )
}

export default PlannerForm;