import React from 'react';
import Specials from './Specials';

function MenuContainer() {
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
  return (

    <section className="menu-container">
        <Specials specials={specialsData} />
    </section>
  );
}

export default MenuContainer;