import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingPage from "./components/BookingPage";

// Mock the availableTimes data for testing
const mockAvailableTimes = ['17:00', '18:00', '19:00'];

// Mock the updateTimes function for testing
const mockUpdateTimes = jest.fn();

test('Renders the BookingPage heading', () => {
  render(
    <BrowserRouter>
      <BookingPage availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
});
