import React, { FC } from 'react';

interface ReviewProps {
  name: string;
  rating: number;
  review: string;
  image: string;
}

const Review: FC<ReviewProps> = ({ name, rating, review, image }) => {
    const stars: { [key: number]: string } = {
        1: "★☆☆☆☆",
        2: "★★☆☆☆",
        3: "★★★☆☆",
        4: "★★★★☆",
        5: "★★★★★",
      };

    return (
        <div className="review">
            <h3>{name}</h3>
            <div>
                <span>{stars[rating]}</span>
                <span>{review}</span>
            </div>
        </div>
    );
}

export default Review;