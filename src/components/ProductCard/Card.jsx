import React from "react";
import "./Card.scss";
import Price from "../ProductData/Price/Price";
import Rating from "../ProductData/Rating/Rating";
import arrow360 from "../../images/360.svg";

const Card = ({ product, footer }) => {
  return (
    <div className="card align-items-center">
      <img
        src={Object.values(product.images)[0]}
        className="card-img-top img"
        alt="..."
      />
      <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
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
