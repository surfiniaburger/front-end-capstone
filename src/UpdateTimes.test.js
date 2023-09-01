import React from 'react';
import { render } from '@testing-library/react';
import { updateTimes } from './App'; // Import the function to be tested

test('updateTimes returns the same value as provided in state', () => {
  const initialState = ['17:00', '18:00', '19:00'];
  const newState = updateTimes(initialState, ['20:00', '21:00', '22:00']);
  expect(newState).toEqual(['20:00', '21:00', '22:00']);
});
