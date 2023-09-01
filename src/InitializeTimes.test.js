import React from 'react';
import { render } from '@testing-library/react';
import { initializeTimes } from './App'; // Import the function to be tested

test('initializeTimes returns the expected initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const actualTimes = initializeTimes();
  expect(actualTimes).toEqual(expectedTimes);
});