import React from "react";
import "./Rating.scss";

const Rating = ({ product }) => {
  return (
    <div className="d-flex rating">
      <div className="stars">
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bxs-star"></i>
        <i class="bx bx-star"></i>
      </div>
      <div className="number ms-2">{product.stars} of 5</div>
      <div className="rates ms-2">{product.rating} Rates</div>
    </div>
  );
};

export default Rating;
