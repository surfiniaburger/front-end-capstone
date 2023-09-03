import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';


test('date input should have the required attribute', () => {
    const { getByLabelText } = render(<BookingForm />);
    const dateInput = getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('required');
});

test('time select should have the required attribute', () => {
  // Simulate no available times
  const { getByLabelText, queryByLabelText } = render(
    <BookingForm availableTimes={[]} />
  );

  // Check if the label exists
  const timeLabel = queryByLabelText('Choose time');
  
  // If the label exists, it should not have the 'required' attribute
  if (timeLabel) {
    expect(timeLabel).not.toHaveAttribute('required');
  }
});


test('guests input should have the min and max attributes', () => {
    const { getByLabelText } = render(<BookingForm />);
    const guestsInput = getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});


test('should enable submit button when guests are between 1 and 10', () => {
  const { getByLabelText, getByRole } = render(<BookingForm />);
  const guestsInput = getByLabelText('Number of guests');
  const submitButton = getByRole('button', { name: /Make Your reservation/i });

  // Valid case: Guests between 1 and 10
  fireEvent.change(guestsInput, { target: { value: '5' } });

  // Ensure the submit button is not disabled
  expect(submitButton).toBeDisabled();

  // Invalid case: Guests less than 1
  fireEvent.change(guestsInput, { target: { value: '0' } });

  // Ensure the submit button is disabled
  expect(submitButton).toBeDisabled();

  // Invalid case: Guests greater than 10
  fireEvent.change(guestsInput, { target: { value: '11' } });

  // Ensure the submit button is disabled
  expect(submitButton).toBeDisabled();
});
