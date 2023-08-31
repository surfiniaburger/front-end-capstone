import React from 'react';

const Specials = ({ specials }) => {
    return (
      
      <section className="specials">
        {specials.map((special, index) => (
          <article key={index} className="menu-item">
            <img className="item-image" src={special.imageSrc} alt={special.name} />
            <div className="item-header">
              <h3>{special.name}</h3>
              <h4>{special.price}</h4>
            </div>
            <p>{special.description}</p>
            <h4 className="order-delivery">
              Order for Delivery
              <img src="icons_assets/bike.png" alt="Delivery Bike" />
            </h4>
          </article>
        ))}
      </section>
    );
  };

export default Specials;


