import React from "react";

function Main() {
  return (
    <main>
      <section className="top">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
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

      <section>
        <article>
          <div className="Specials">
            <h2>Specials</h2>
            <button>Online Menu</button>
          </div>
        </article>
      </section>

      <section className="menu-container">
        <article className="menu-item">
          <img className="item-image" src="icons_assets/greek salad.jpg" alt="Greek Salad" />
          <div className="item-header">
            <h3>Greek salad</h3>
            <h4>$12.99</h4>
          </div>
          <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <h4 className="order-delivery">
            Order for Delivery
            <img src="icons_assets/bike.png" alt="Delivery Bike" />
          </h4>
        </article>

        {/* Add more articles here */}
        <article className="menu-item">
          <img className="item-image" src="icons_assets/brusch.jpg" alt="Bruschetta" />
          <div className="item-header">
            <h3>Bruschetta</h3>
            <h4>$5.99</h4>
          </div>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
          <h4 className="order-delivery">
            Order for Delivery
            <img src="icons_assets/bike.png" alt="Delivery Bike" />
          </h4>
        </article>

        <article className="menu-item">
          <img className="item-image" src="icons_assets/lemon dessert.jpg" alt="Greek Salad" />
          <div className="item-header">
            <h3>Lemon Dessert</h3>
            <h4>$5.00</h4>
          </div>
          <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <h4 className="order-delivery">
            Order for Delivery
            <img src="icons_assets/bike.png" alt="Delivery Bike" />
          </h4>
        </article>
        {/* Repeat similar structure for other menu items */}
      </section>

      <section>
        <article>
          <div className="Testimonials">
            <h2>Testimonials</h2>
          </div>
        </article>
      </section>

      <section>
        <div className="card">
          <div className="rating">
            <img src="icons_assets/stars.png" alt="Rating" />
          </div>
          <div className="name">Jim Yu</div>
          <div className="review">Excellent product. I'm very satisfied with my purchase.</div>
          <img src="icons_assets/baby.jpg" alt="Jim Yu" className="reviewer-image" />
        </div>

        {/* Repeat similar structure for other testimonials */}

        <div className="card">
          <div className="rating">
            <img src="icons_assets/stars.png" alt="Rating" />
          </div>
          <div className="name">John B</div>
          <div className="review">Excellent product. I'm very satisfied with my purchase.</div>
          <img src="icons_assets/guy.jpg" alt="John B" className="reviewer-image" />
        </div>

        <div className="card">
          <div className="rating">
            <img src="icons_assets/stars.png" alt="Rating" />
          </div>
          <div className="name">Papa</div>
          <div className="review">Excellent product. I'm very satisfied with my purchase.</div>
          <img src="icons_assets/they.jpg" alt="Papa" className="reviewer-image" />
        </div>

        <div className="card">
          <div className="rating">
            <img src="icons_assets/stars.png" alt="Rating" />
          </div>
          <div className="name">Sarah</div>
          <div className="review">Excellent product. I'm very satisfied with my purchase.</div>
          <img src="icons_assets/she.jpg" alt="" className="reviewer-image" />
        </div>
      </section>

      <section className="bottom">
        <div className="text-container">
          <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </article>
        </div>
        <div className="image-stack">
          <img className="item3" src="icons_assets/Mario and Adrian A.jpg" alt="Mario and Adrian a" />
          <img className="item4" src="icons_assets/Mario and Adrian b.jpg" alt="Mario and Adrian b" />
        </div>
      </section>
    </main>
  );
}

export default Main;
