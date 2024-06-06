import "./Price.scss";
import React from "react";

const Price = ({ product }) => {
  return (
    <div className="price-discount d-flex align-items-center">
      <h4 className="current-price">
        {product.currentPrice} {product.currency}
      </h4>
      <span className="old-price mx-5">{product.oldPrice}</span>
      <span className="badge discount">{product.discount} off</span>
    </div>
  );
};

export default Price;
