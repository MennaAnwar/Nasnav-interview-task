import "./Price.scss";
import React from "react";

const Price = ({ product }) => {
  return (
    <div className="price-discount d-flex align-items-center flex-wrap">
      <h4 className="current-price me-1">
        {product.currentPrice} {product.currency}
      </h4>
      <span className="old-price me-1">{product.oldPrice}</span>
      <span className="badge discount">{product.discount} off</span>
    </div>
  );
};

export default Price;
