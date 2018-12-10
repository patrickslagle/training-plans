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
})

test('Home component renders properly', () => {
  const component = renderer.create(
    <Home />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})