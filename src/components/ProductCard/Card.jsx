import React from "react";
import "./Card.scss";
import Price from "../ProductData/Price/Price";
import Rating from "../ProductData/Rating/Rating";
import arrow360 from "../../images/360.svg";

const Card = ({ product, footer }) => {
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
            <img src={arrow360} alt="360" className="arrow-360" />
          </div>
        </div>
        <div className="justify-content-center">
          <Rating product={product} />
        </div>

        <div>{footer}</div>
      </div>
    </div>
  );
};

export default Card;
