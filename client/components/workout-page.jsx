import React, { useContext } from 'react';
import sanitizeHtml from 'sanitize-html';
import ChangeAppContext from './change-app-context.jsx';
import Home from './home.jsx';
import '../styles/workout-page.css';

const WorkoutPage = ({ workout }) => {
  const {
    title,
    icon,
    description,
    price,
    workoutCount,
    weeksDuration,
    authorFullName,
    category,
  } = workout;
  const changeApp = useContext(ChangeAppContext);
  return (
    <div className={`workout-page ${category}`}>
      <button
        type="button"
        onClick={() => changeApp(<Home />)}
        id="back-home"
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1-457733.png"
          alt="back"
          id="back-arrow"
        />
        <p>Home</p>
      </button>
      <h1 id="workout-title">{title}</h1>
      <div id="workout-info">
        <img className="icon" src={icon} alt="workout type" />
        <div id="workout-details">
          <p>{`price: ${price}`}</p>
          <p>{`Workout Count: ${workoutCount}`}</p>
          <p>{`Week Duration: ${weeksDuration}`}</p>
          <p>{`Author: ${authorFullName}`}</p>
        </div>
      </div>
      <div id="workout-description-container">
        <h3>Workout Description</h3>
        <div
          id="workout-description"
          dangerouslySetInnerHTML={{__html: sanitizeHtml(description) }} 
        />
      </div>
    </div>
  );
};

export default WorkoutPage;
