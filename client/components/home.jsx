import React, { useState } from 'react';
import WorkoutList from './workout-list.jsx';
import WorkoutCategory from './workout-category.jsx';
import '../styles/home.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="home">
      <h1>{count}</h1>
      <div id="workouts">
        <WorkoutCategory
          category="Running"
          subcategories={['Marathon', 'Half Marathon', '10km', '5km']}
          loadWorkouts={setCount}
        />
        <WorkoutCategory
          category="Cycling"
          subcategories={['Road', 'Mountrain', 'Trial']}
          loadWorkouts={setCount}
        />
        <WorkoutCategory
          category="Triathlon"
          subcategories={['Iron Man', 'Half Iron Man', 'Olympic', 'Sprint']}
          loadWorkouts={setCount}
        />
        <WorkoutCategory
          category="Other"
          subcategories={['Swimming', 'Fitness', 'Obstacle', 'Duathlon']}
          loadWorkouts={setCount}
        />
      </div>
    </div>
  );
};

export default App;
