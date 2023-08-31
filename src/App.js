import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BookingPage from './components/BookingPage'
import MenuContainer from './components/MenuContainer';
import HomePage from './components/HomePage';
import About from './components/About';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      
      
        <Routes>
          <Route path="/" element ={<HomePage/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="/menu" element ={<MenuContainer/>}/>
          <Route path="/reservations" element ={<BookingPage />}/>
          <Route path="/order-online" element ={<OrderOnline/>}/>
          <Route path="/login" element ={<Login/>}/>
          </Routes>
      </div>
 
    
  </BrowserRouter>
  );
}

export default App;

