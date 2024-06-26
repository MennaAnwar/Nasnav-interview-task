import React from "react";
import "./SimilarProducts.scss";
import Card from "../ProductCard/Card";
import { Data } from "../../services/Data";

const SimilarProducts = ({ currentProductId }) => {
  // Filter out the current product from the Data array
  const similarProducts = Data.filter(
    (product) => product.id !== currentProductId
  );

  return (
    <div className="similarProducts px-5 mt-5">
      <h2>Similar Products</h2>
      <h6>You may like these products also</h6>
      <div className="my-4 similar-products container-fluid">
        <div className="row d-flex flex-nowrap mb-4">
          {similarProducts.map((product) => (
            <div className="col-3">
              <Card key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
