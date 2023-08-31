import React from 'react';
import Chicago from './Chicago';

function Top() {
  return (
    <section className="top">
        <article>
          <Chicago />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <br />
          <br />
          <button>Reserve a table</button>
        </article>
        <img className="item1" src="icons_assets/restauranfood.jpg" alt="restaurantfood" />
      </section>
  );
}

export default Top;

