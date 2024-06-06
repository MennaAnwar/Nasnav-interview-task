import React from "react";
import { Data } from "../../services/Data";
import Path from "../../components/Path/Path";

const ProductDetails = () => {
  const product = Data[0];
  return (
    <div>
      <Path
        path={[
          product.gender,
          product.category,
          product.type,
          product.brand,
          product.product,
        ]}
      />
    </div>
  );
};

export default ProductDetails;
