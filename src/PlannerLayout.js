import React from "react";
import PlannerTable from './PlannerTable'
import {useNavigate} from 'react-router-dom'

const PlannerLayout = (props) => {
    const { plannerArr } = props;
    const navigate = useNavigate();
    console.log(plannerArr);
    const plannerTrip = () =>{
        navigate('/plannerForm')
    }
    return (
        <div>
            <button id='planTripBtn' onClick={plannerTrip}>Plan a Trip</button>
            <PlannerTable plannerArr={plannerArr} />
        </div>
    )
}

export default PlannerLayout;