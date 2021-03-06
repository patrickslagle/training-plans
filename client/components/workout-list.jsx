import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WorkoutItem from './workout-item.jsx';
import '../styles/workout-items.css';

const WorkoutList = ({ workouts }) => {
  const [workoutItems, updateWorkouts] = useState([]);
  // upon mount or update, set workoutItems to an array of items to render
  useEffect(() => {
    updateWorkouts(workouts.map(workout => (
      <WorkoutItem
        key={workout._source.sku}
        workout={workout._source}
      />
    )));
  }, []);

  return (
    <div id="workout-table">
      <div id="workout-table-header">
        <p className="icon" />
        <p className="title">Title</p>
        <p className="weeks-duration">Weeks</p>
        <p className="price">Price</p>
      </div>
      {workoutItems}
    </div>
  );
};

export default WorkoutList;

WorkoutList.propTypes = {
  workouts: PropTypes.array.isRequired,
};
