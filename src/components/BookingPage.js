import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, updateTimes }) {
  return (
    <div>
      <h2>Make a Reservation</h2>
      {/* Pass availableTimes and updateTimes as props to BookingForm */}
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

export default BookingPage;
