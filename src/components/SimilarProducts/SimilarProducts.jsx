import React from "react";
import "./SimilarProducts.scss";
import Card from "../ProductCard/Card";
import { Data } from "../../services/Data";

const SimilarProducts = () => {
  return (
    <div className="similarProducts px-5 mt-5">
      <h2>Similar Products</h2>
      <h6>You may like these products also</h6>
      <div className="my-4">
        <Card product={Data[1]} />
      </div>
    </div>
  );
};

export default SimilarProducts;
