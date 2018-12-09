import React from 'react';
import WorkoutPage from './workout-page.jsx';

const WorkoutItem = ({ workout, changeApp }) => {
  const { icon, title, weeksDuration, price } = workout;
  return (
    <button
      className="workout-item"
      onClick={() => changeApp(<WorkoutPage workout={workout} />)}
      type="button"
    >
      <img src={icon} alt="workout type" />
      <p>{title}</p>
      <p>{weeksDuration}</p>
      <p>{price}</p>
    </button>
  )
};

export default WorkoutItem;
