import React from 'react';
import Nav from './Nav';
import Header from './Header'
import Top from './Top'
import CallToAction from './CallToAction'
import MenuContainer from './MenuContainer';
import OnlineMenu from './OnlineMenu';
import ReviewContainer from './ReviewContainer';
import Testimonials from './Testimonials'
import Bottom from './Bottom'
import Footer from './Footer';


function HomePage() {
  return (
    <>
      <Header />
      <Nav />
      <CallToAction />
      <Top />
      <OnlineMenu />
      <MenuContainer />
      <Testimonials />
      <ReviewContainer />
      <Bottom />
      <Footer />
    </>
  );
}

export default HomePage;