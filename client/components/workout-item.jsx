import React, { useContext } from 'react';
import WorkoutPage from './workout-page.jsx';
import changeAppContext from './change-app-context.jsx';

const WorkoutItem = ({ workout }) => {
  const { icon, title, weeksDuration, price } = workout;
  const changeApp = useContext(changeAppContext);
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
  );
};

export default WorkoutItem;
