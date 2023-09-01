import React, { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BookingPage from './components/BookingPage';
import MenuContainer from './components/MenuContainer';
import HomePage from './components/HomePage';
import About from './components/About';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

// Define the reducer function
function availableTimesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, just return the same available times
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const [initialTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Create a function to initialize times
  const initializeTimes = () => initialTimes;

  // Initialize availableTimes using useReducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  // Function to update times (currently using the same initial times)
  const updateTimes = (newTimes) => {
    dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuContainer />} />
          {/* Pass availableTimes and updateTimes as props to BookingPage */}
          <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

