import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BookingPage from './components/BookingPage';
import MenuContainer from './components/MenuContainer';
import HomePage from './components/HomePage';
import About from './components/About';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';

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

// ...

export function updateTimes(currentState, newTimes) {
  return newTimes; // For now, it simply returns the new times
}

// ...


// ...

export function initializeTimes() {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
}

// ...


function App() {
  // const [initialTimes, setInitialTimes] = useState([
  //   '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  // ]);
  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
      .then((response) => response.json())
      .then((data) =>  {
        // Assuming the API returns an array of available times, update initialTimes here
        //setInitialTimes(data.availableTimes);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);


  // Initialize availableTimes using useReducer
  const [availableTimes] = useReducer(availableTimesReducer, [], initializeTimes);


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
          <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* Add the confirmation route */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
