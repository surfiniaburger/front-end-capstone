import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  // Stateful form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [submitDisabled, setSubmitDisabled] = useState(true); // Initialize as disabled 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };

    // Call the submitForm function passed via props
    submitForm(formData);
  };

  // Effect to update available times based on selected date
  useEffect(() => {
    if (Array.isArray(availableTimes)) {
      // Update times based on the selected date (for now, using the same initial times)
      const newTimes = [...availableTimes]; // Clone the array
      console.log("New Times:", newTimes); // Log the new times to check

      updateTimes(newTimes);
    }
  }, [date, updateTimes, availableTimes]);

  

  useEffect(() => {
    // Check if the form is valid
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isDateValid = date !== '';
    const isTimeValid = availableTimes.includes(time);

   const isFormValid = isGuestsValid && isDateValid && isTimeValid;
   setSubmitDisabled(!isFormValid);
  }, [date, time, guests, availableTimes]);

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required aria-label="Choose date" />

      <label htmlFor="res-time">Choose time</label>
      {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>{availableTime}</option>
          ))}
        </select>
      ) : (
        <p>No available times found.</p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}  aria-label="Number of guests" />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Occasion" >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={submitDisabled}  />
    </form>
  );
}

// Define default props for BookingForm
BookingForm.defaultProps = {
  availableTimes: [], // Default value for availableTimes prop
  updateTimes: () => {}, // Default value for updateTimes prop
};

// Specify prop types using PropTypes
BookingForm.propTypes = {
  availableTimes: PropTypes.array, // Prop type for availableTimes
  updateTimes: PropTypes.func, // Prop type for updateTimes
  submitForm: PropTypes.func.isRequired, // Prop type for submitForm (isRequired indicates it must be provided)
};



export default BookingForm;




