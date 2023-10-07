import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';

interface Props {
  productId: string;
}

function ProductStarRating({ productId }: Props) {
  const [rating, setRating] = useState(() => {
    const storedRating = localStorage.getItem(`productRating-${productId}`);
    return storedRating ? parseInt(storedRating, 10) : 0;
  });

  const handleStarClick = (nextValue: number) => {
    setRating(nextValue);
    localStorage.setItem(`productRating-${productId}`, nextValue.toString());
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ fontSize: '30px', marginRight: '10px' }}>
        <StarRatingComponent
          name={`rating-${productId}`}
          value={rating}
          onStarClick={handleStarClick}
          starCount={5}
          starColor="#ffb400"
          emptyStarColor="#ccc"
          renderStarIcon={() => <span>★</span>}
        />
      </div>
      <div style={{ fontSize: '1.2em' }}>
        {rating} out of 5
      </div>
    </div>
  );
}

export default ProductStarRating;
