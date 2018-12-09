import React, { useState } from 'react';
import WorkoutList from './workout-list.jsx';
import WorkoutCategory from './workout-category.jsx';
import '../styles/home.css';

const Home = () => {
  const [workouts, loadWorkouts] = useState([]);
  const fetchWorkouts = (subcategory) => {
    fetch(`/workout/${subcategory}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('Unable to fetch workouts'));
      })
      .then((fetchedWorkouts) => {
        console.log(fetchedWorkouts)
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
          subcategories={['Road', 'Mountain', 'Trial']}
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
        {workouts.length > 0 && <WorkoutList workouts={workouts} />}
      </div>
    </div>
  );
};

export default Home;
