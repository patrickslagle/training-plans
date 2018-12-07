import React, { useState } from 'react';
import WorkoutList from './workout-list.jsx';
import WorkoutCategory from './workout-category.jsx'; 

const App = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <WorkoutCategory
        title="Running"
        categories={['Marathon', 'Half Marathon', '10km', '5km']}
        img=""
        loadWorkouts={setCount}
      />
      <WorkoutCategory
        title="Cycling"
        categories={['Road', 'Mountrain', 'trial']}
        img=""
        loadWorkouts={setCount}
      />
      <WorkoutCategory
        title="Triathlon"
        categories={['Iron Man', 'Half Iron Man', 'Olympic', 'Sprint']}
        img=""
        loadWorkouts={setCount}
      />
      <WorkoutCategory
        title="Other"
        categories={['Swimming', 'Fitness', 'Obstacle', 'Duathlon']}
        img=""
        loadWorkouts={setCount}
      />
    </div>
  );
};

export default App;
