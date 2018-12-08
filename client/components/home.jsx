import React, { useState } from 'react';
import WorkoutList from './workout-list.jsx';
import WorkoutCategory from './workout-category.jsx';
import '../styles/home.css';

const App = () => {
  const [workouts, loadWorkouts] = useState([]);
  const fetchWorkouts = (subcategory) => {
    console.log('subcategory', subcategory)
    fetch(`/workout/${subcategory}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Unable to fetch workouts'));
      })
      .then((fetchedWorkouts) => {
        loadWorkouts(fetchedWorkouts);
      })
      .catch(() => console.error('Unable to fetch people'));
  };

  return (
    <div id="home">
      <h1>Find A Workout</h1>
      <div id="workouts">
        <WorkoutCategory
          category="Running"
          subcategories={['Marathon', 'Half Marathon', '10km', '5km']}
          fetchWorkouts={fetchWorkouts}
        />
        <WorkoutCategory
          category="Cycling"
          subcategories={['Road', 'Mountrain', 'Trial']}
          fetchWorkouts={fetchWorkouts}
        />
        <WorkoutCategory
          category="Triathlon"
          subcategories={['Iron Man', 'Half Iron Man', 'Olympic', 'Sprint']}
          fetchWorkouts={fetchWorkouts}
        />
        <WorkoutCategory
          category="Other"
          subcategories={['Swimming', 'Fitness', 'Obstacle', 'Duathlon']}
          fetchWorkouts={fetchWorkouts}
        />
      </div>
    </div>
  );
};

export default App;
