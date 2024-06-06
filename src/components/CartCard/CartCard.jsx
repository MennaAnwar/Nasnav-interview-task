import React from "react";
import "./CartCard.scss";
import Cart from "../../services/Cart";

const CartCard = ({ product }) => {
  const cart = Cart.items;
  const foundProduct = cart.find((cartItem) => cartItem.id === product.id);

  return (
    <div class="card cartcard">
      <div class="card-content">
        <div class="card-body p-1">
          <div class="media d-flex">
            <div class="align-self-center me-2">
              <img
                className="img-small"
                src={Object.values(product.images)[0]}
              />
            </div>
            <div class="media-body text-right">
              <h6>{product.title}</h6>
              {foundProduct ? (
                <>
                  <div>Quantity: {foundProduct.quantity}</div>
                  <div className="price">
                    {product.price * foundProduct.quantity} {product.currency}
                  </div>
                </>
              ) : (
                <span>Quantity: 0</span>
              )}
            </div>
            <div className="d-flex align-items-end">
              <button className="btn remove">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
