import React, { useState } from 'react';
import WorkoutList from './workout-list.jsx';
import WorkoutCategory from './workout-category.jsx';
import '../styles/home.css';

const Home = () => {
  const [workouts, loadWorkouts] = useState([]);

  // fetch several workouts from the subcategory selected
  const fetchWorkouts = (subcategory) => {
    fetch(`/workout/${subcategory}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Unable to fetch workouts'));
      })
      .then((fetchedWorkouts) => {
        // update workouts with an array of workouts matching the subcategory
        loadWorkouts(fetchedWorkouts);
      })
      .catch(() => console.error('Unable to fetch workouts'));
  };

  return (
    <div id="home">
      <div id="banner">
        <h1 id="banner-text">Training Plans</h1>
      </div>
      <div id="workouts">
        <div id="row-1">
          <WorkoutCategory
            category="Running"
            subcategories={['Marathon', 'Half Marathon', '10km', '5km']}
            fetchWorkouts={fetchWorkouts}
          />
          <WorkoutCategory
            category="Cycling"
            subcategories={['Road', 'Mountain', 'Trial']}
            fetchWorkouts={fetchWorkouts}
          />
        </div>
        <div id="row-2">
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
        {workouts.length > 0 && <WorkoutList workouts={workouts} />}
      </div>
    </div>
  );
};

export default Home;
