import React, { useState, useEffect } from 'react';
import WorkoutItem from './workout-item.jsx';

const WorkoutList = ({ workouts, changeApp }) => {
  const [workoutItems, updateWorkouts] = useState([]);
  useEffect(() => {
    updateWorkouts(workouts.map(workout => (
      <WorkoutItem
        key={workout._source.sku}
        workout={workout._source}
        changeApp={changeApp}
      />
    )));
  });

  return (
    <div>
      <h2>Select Workout</h2>
      <div id="workout-plans">
        {workoutItems}
      </div>
    </div>
  );
};

export default WorkoutList;
