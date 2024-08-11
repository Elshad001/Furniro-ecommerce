import React from 'react';

const Rating = ({ rating }) => {
  const starCount = 5;
  const filledStars = Math.floor(rating);
  const percentage = (rating - filledStars) * 100;

  const stars = Array.from({ length: starCount }, (_, index) => {
    let starClassName = 'text-gray-100';

    if (index < filledStars) {
      starClassName = 'text-yellow-500';
    } else if (index === filledStars && percentage > 0) {
      starClassName = `bg-gradient-to-r from-yellow-500 via-yellow-500 to-transparent bg-clip-text text-transparent ${percentage}%`;

    }

    return (
      <div>
        <span
          key={index}
          className={`text-2xl inline-block mr-1 ${starClassName}`}
        >
          &#9733;
        </span>
      </div>
    );
  });

  return <div className="rating">{stars}</div>;
};

export default Rating;