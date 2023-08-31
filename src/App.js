import React from 'react';
import './App.css';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Bottom from './components/Bottom';
import OnlineMenu from './components/OnlineMenu';
import Top from './components/Top';
import Testimonials from './components/Testimonials';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // Mock data for Specials and CustomersSay components
  const specialsData = [
    {
      name: 'Greek salad',
      price: '$12.99',
      description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      imageSrc: 'icons_assets/greek salad.jpg'
    },
    {
      name: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      imageSrc: 'icons_assets/brusch.jpg'
    },
    {
      name: 'Lemon Dessert',
      price: '$5.00',
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      imageSrc: 'icons_assets/lemon dessert.jpg'
    }
    // Add more special menu items here
  ];

  const testimonialsData = [
    {
      reviewerName: 'Jim Yu',
      reviewerImage: 'icons_assets/baby.jpg',
      review: "Excellent product. I'm very satisfied with my purchase."
    },
    {
      reviewerName: 'John B',
      reviewerImage: 'icons_assets/guy.jpg',
      review: "Excellent product. I'm very satisfied with my purchase."
    },
    {
      reviewerName: 'Sarah',
      reviewerImage: 'icons_assets/she.jpg',
      review: "Excellent product. I'm very satisfied with my purchase."
    },
    {
      reviewerName: 'Papa',
      reviewerImage: 'icons_assets/they.jpg',
      review: "Excellent product. I'm very satisfied with my purchase."
    }
    // Add more testimonials here
  ];


  return (
    <div className="app">
      <Header />
      <Nav />
      <CallToAction />
      <Top />
      <OnlineMenu />
      <Specials specials={specialsData} />
      <Testimonials />
      <CustomersSay testimonials={testimonialsData} />
      <Bottom />
      <Footer />
      
    </div>
  );
}

export default App;

