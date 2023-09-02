// BookingPage.js

import React from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function BookingPage({ availableTimes, updateTimes }) {
  const navigate = useNavigate(); // Get the navigate function

  const submitForm = (formData) => {
    // Replace this with your actual API call
    // If the API call is successful (e.g., returns true), navigate to the confirmation page
    // For now, let's simulate a successful booking
    const isBookingSuccessful = true;

    if (isBookingSuccessful) {
      navigate('/confirmed'); // Use the navigate function to go to the confirmation page
    }
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      {/* Pass availableTimes and updateTimes as props to BookingForm */}
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm} // Pass submitForm as a prop
      />
    </div>
  );
}

export default BookingPage;
