import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, updateTimes }) {
  // Stateful form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17.00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Effect to update available times based on selected date
  useEffect(() => {
    if (Array.isArray(availableTimes)) {
      // Update times based on the selected date (for now, using the same initial times)
      const newTimes = [...availableTimes]; // Clone the array
      updateTimes(newTimes);
    }
  }, [date, updateTimes, availableTimes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    // Handle form submission, possibly making a reservation
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label htmlFor="res-time">Choose time</label>
      {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>{availableTime}</option>
          ))}
        </select>
      ) : (
        <p>No available times found.</p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;




