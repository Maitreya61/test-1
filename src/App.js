import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [workouts,setWorkouts] = useState([])

  useEffect(()=>{
    axios.get("/workouts")
     .then((res) => setWorkouts(res.data))
 },[])

  return (
    <div className="App">
      <div className="workouts">
        {workouts && workouts.map((workout) => {
          return (
            <div className="workout-details" key={workout._id}>
              <h4>{workout.title}</h4>
              <p><strong>Load (kg): </strong>{workout.load}</p>
              <p><strong>Number of reps: </strong>{workout.reps}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
