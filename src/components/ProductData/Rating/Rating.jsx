import React from "react";
import "./Rating.scss";

const Rating = ({ product }) => {
  return (
    <div className="d-flex rating my-1">
      <div className="stars">
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bx-star"></i>
      </div>
      <div className="number ms-2">{product.stars} of 5</div>
      <div className="rates ms-2">{product.rating} Rates</div>
    </div>
  );
};

export default Rating;
