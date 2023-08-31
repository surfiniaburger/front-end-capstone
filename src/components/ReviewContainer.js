import React from 'react';
import CustomersSay from  './CustomersSay'

function ReviewContainer() {
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
    <section className="section-reviews">
        <CustomersSay testimonials={testimonialsData} />
    </section>
    
  );
}

export default ReviewContainer;