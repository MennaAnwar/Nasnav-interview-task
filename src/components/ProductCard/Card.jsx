import React from "react";
import "./Card.scss";
import Price from "../ProductData/Price/Price";
import Rating from "../ProductData/Rating/Rating";

const Card = ({ product }) => {
  return (
    <div class="card align-items-center">
      <img
        className="img"
        src={Object.values(product.images)[0]}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h6 class="card-title">{product.title}</h6>
        <div className="row">
          <div className="col-6">
            <Price product={product} />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img className="brand" src="/images/adidas.svg" />
          </div>
        </div>
        <div className="justify-content-center">
          <Rating product={product} />
        </div>

        {/* footer of card */}
      </div>
    </div>
  );
};

export default Card;
