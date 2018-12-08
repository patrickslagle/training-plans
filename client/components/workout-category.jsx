import React, { useState } from 'react';
import '../styles/workout-categories.css';

const WorkoutCategory = ({ category, subcategories, img, loadWorkouts, count }) => {
  const [showSubCategories, toggleSubcategories] = useState(false)

  function showCategoryInfo() {
    // if mouse is over category, show subcategories
    if (showSubCategories) {
      return subcategories.map(subcategory => (
        <button
          key={subcategory}
          type="button"
          className="workout-subcategory"
        >
          {subcategory}
        </button>
      ));
    }
    // otherwise, show category title
    return <h1 className="workout-category-title">{category}</h1>;
  }

  return (
    <div
      className="workout-category"
      onMouseEnter={() => toggleSubcategories(true)}
      onMouseLeave={() => toggleSubcategories(false)}
    >
      {showCategoryInfo()}
    </div>
  )
};

export default WorkoutCategory;
