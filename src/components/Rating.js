import React from "react";

const Rating = props => {
  const { rating } = props;

  const updateRating = event => {
    props.updateRating(event.target.value);
  };

  return (
    <div className="rating">
      <h3 className="title">Rating</h3>
      <div className="rating-slider">
        <input
          className="rating-slider__range"
          type="range"
          value={rating}
          min="0"
          max="10"
          step="0.5"
          onChange={updateRating}
        />
        <span className="rating-slider__value">{rating}</span>
      </div>
    </div>
  );
};

export default Rating;
