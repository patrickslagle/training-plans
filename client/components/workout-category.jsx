import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/workout-categories.css';

const WorkoutCategory = ({ category, subcategories, fetchWorkouts }) => {
  const [showSubCategories, toggleSubcategories] = useState(false);

  // dynamically shows category title or subcategories based on mouse over
  function showCategoryInfo() {
    // if mouse is over category, show subcategories
    if (showSubCategories) {
      return subcategories.map(subcategory => (
        <button
          key={subcategory}
          type="button"
          className="workout-subcategory"
          onClick={() => fetchWorkouts(subcategory)}
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
      className={`workout-category ${category.toLowerCase()}`}
      onMouseEnter={() => toggleSubcategories(true)}
      onMouseLeave={() => toggleSubcategories(false)}
    >
      {showCategoryInfo()}
    </div>
  );
};

export default WorkoutCategory;

WorkoutCategory.propTypes = {
  category: PropTypes.string.isRequired,
  subcategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchWorkouts: PropTypes.func.isRequired,
};
