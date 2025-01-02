import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PlannerForm from './PlannerForm';
import PlannerLayout from './PlannerLayout';
import {plannerJson} from './PlannerTripJson'

function App() {

  const [plannerArr, setPlannerArr] = useState(plannerJson);
  console.log(plannerArr, 'plan');

  return (
    <div className="App">
      <h1>FAMILY TRAVEL PLANNER</h1>
      <Routes>
        <Route path='/' element={<PlannerLayout plannerArr={plannerArr} />} />
        <Route path='/plannerForm' element={<PlannerForm plannerArr={plannerArr} setPlannerArr={setPlannerArr}/>} />
      </Routes>

    </div>
  );
}

export default App;
