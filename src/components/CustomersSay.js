import React from 'react';



const CustomersSay = ({ testimonials }) => {
    return (
    
      <section className="testimonials">
        
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <div className="rating">
              <img src="icons_assets/stars.png" alt="Rating" className="rating" />
            </div>
            <div className="reviewer-content">
              <div className="reviewer-info">
                <img src={testimonial.reviewerImage} alt={testimonial.reviewerName} className="reviewer-image" />
                <div className="name">{testimonial.reviewerName}</div>
              </div>
              <div className="review">{testimonial.review}</div>
            </div>
          </div>
        ))}
      </section>
    );
  };

export default CustomersSay;  