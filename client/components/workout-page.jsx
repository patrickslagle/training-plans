import React from 'react';
import sanitizeHtml from 'sanitize-html';
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
  return (
    <div className={`workout-page ${category}`}>
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
