import React from "react";
import "./ProductData.scss";
import QuantitySelector from "./QuantitySelector";
import Price from "./Price/Price";
import Rating from "./Rating/Rating";

const ProductData = ({ product }) => {
  const sizes = ["Small", "Medium", "Large", "X Large", "XX Large"];
  const colors = Object.values(product.colors);
  return (
    <div className=" product-data">
      <img src="/images/adidas.svg" alt="adidas" />
      <h5>{product.title}</h5>
      <h6 className="gender">{product.gender}</h6>
      <Rating product={product} />
      <Price product={product} />
      <hr className="hr" />
      <div className="size">
        <h4>Size</h4>
        <div className="d-flex">
          {sizes.map((size) => (
            <div
              key={size}
              className={`size-circle mx-1 ${
                product.size === size ? "active" : ""
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <hr className="hr" />
      <div className="colors">
        <h4>Colors</h4>

        {colors.map((color, idx) => (
          <img key={idx} src={color} alt="img" className="colors-img mx-1" />
        ))}
      </div>
      <hr className="hr" />
      <div className="Quantity">
        <h4>Quantity</h4>
        <QuantitySelector />
      </div>
      <div className="btns mt-4 d-flex align-items-center">
        <button className="btn addtocart me-4">Add To Cart</button>
        <button className="btn pickupfromstore">Pickup From Store</button>
      </div>
    </div>
  );
};

export default ProductData;
