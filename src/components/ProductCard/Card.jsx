import React from "react";
import "./Card.scss";

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
          <div className="col-6">1</div>
          <div className="col-6 d-flex justify-content-center">
            <img className="brand" src="/images/adidas.svg" />
          </div>
        </div>
        {/* rating */}
        {/* footer of card */}
      </div>
    </div>
  );
};

export default Card;
