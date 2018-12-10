import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../client/components/app.jsx';
import Home from '../client/components/home.jsx';
import WorkoutCategory from '../client/components/workout-category.jsx';
import WorkoutItem from '../client/components/workout-item.jsx';
import WorkoutList from '../client/components/workout-list.jsx';
import WorkoutPage from '../client/components/workout-page.jsx';


configure({ adapter: new Adapter() });

test('App component renders properly', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Home component renders properly', () => {
  const component = renderer.create(
    <Home />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('WorkoutCategory component renders properly', () => {
  const fetchWorkouts = jest.fn();
  const component = renderer.create(
    <WorkoutCategory 
      category='running'
      subcategories={['Marathon', 'Half Marathon', '10km', '5km']} 
      fetchWorkouts={fetchWorkouts}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('WorkoutItem component renders properly', () => {
  const component = renderer.create(
    <WorkoutItem
      workout={{
        icon: 'https://assets.trainingpeaks.com/images/icons/training-plans/half-marathon.svg',
        title: 'HALFMARATHON Training Plan (INTERMEDIATE 24Wk Plan, Sat Race) Start Any Monday Power Based',
        weeksDuration: 24,
        price: 207,
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});