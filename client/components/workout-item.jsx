import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import WorkoutPage from './workout-page.jsx';
import changeAppContext from './change-app-context.jsx';
import '../styles/workout-items.css';

const WorkoutItem = ({ workout }) => {
  const { icon, title, weeksDuration, price } = workout;
  const changeApp = useContext(changeAppContext);
  return (
    <button
      className="workout-item"
      onClick={() => changeApp(<WorkoutPage workout={workout} />)}
      type="button"
    >
      <img className="icon" src={icon} alt="workout type" />
      <p className="title">{title}</p>
      <p className="weeks-duration">{weeksDuration}</p>
      <p className="price">{price}</p>
    </button>
  );
};

export default WorkoutItem;

WorkoutItem.propTypes = {
  workout: PropTypes.object.isRequired,
};
