import React from 'react';
// look to import https://github.com/cure53/DOMPurify
// or lodash escape https://lodash.com/docs#escape
import sanitizeHtml from 'sanitize-html';

const WorkoutPage = ({ workout }) => {
  const {
    title,
    icon,
    description,
    price,
    workoutCount,
    weeksDuration,
    authorFullName,
  } = workout;
  return (
    <div>
      <p>{title}</p>
      <p>{icon}</p>
      <p>{price}</p>
      <p>{workoutCount}</p>
      <p>{weeksDuration}</p>
      <p>{authorFullName}</p>
      <div dangerouslySetInnerHTML={{__html: sanitizeHtml(description) }} />
    </div>
  );
};

export default WorkoutPage;
