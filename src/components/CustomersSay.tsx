import React from "react";
import Review from "./Review.tsx";
import "./styles/Reviews.css"

const CustomerSays = () => {
    
  const reviews = [
    {
      name: 'Anna',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/women/91.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      name: 'Anna',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/women/95.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      name: 'Anna',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/men/90.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      name: 'Anna',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/men/80.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }
  ];

  return (
    <div className="review-container">
      <div>
      <h1>What ours customers say!</h1>
      </div>
      
      <div className="reviews">
        {reviews.map((review) => (
          <Review name={review.name} rating={review.stars} review={review.review} image={review.image} />
        ))}
      </div>
    </div>
  );
};

export default CustomerSays;
