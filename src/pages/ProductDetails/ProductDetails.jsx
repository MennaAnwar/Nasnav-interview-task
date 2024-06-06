import React from "react";
import { Data } from "../../services/Data";
import Path from "../../components/Path/Path";
import Swiper from "../../components/ProductImages/Swiper";
import ProductData from "../../components/ProductData/ProductData";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";

const ProductDetails = () => {
  const product = Data[0];
  const imagesArray = Object.values(product.images);

  return (
    <>
      <Path
        path={[
          product.gender,
          product.category,
          product.type,
          product.brand,
          product.product,
        ]}
      />
      <div className="row px-5 my-3">
        <div className="col-lg-6 col-md-12">
          <Swiper imgs={imagesArray} />
        </div>
        <div className="col-lg-6 col-md-12">
          <ProductData product={product} />
        </div>
      </div>
      <SimilarProducts />
    </>
  );
};

export default ProductDetails;
