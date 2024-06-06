import React from "react";
import "./CartSummary.scss";
import Cart from "../../services/Cart";
import CartCard from "../CartCard/CartCard";
import { Data } from "../../services/Data";

const CartSummary = ({ isOpen, onClose }) => {
  const totalPrice = Cart.getTotalPrice();
  const items = Cart.getCartLength();

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          <i className="bx bx-x"></i>
        </button>
        <h2 className="d-flex justify-content-center">My Cart</h2>
        <h5>Cart Summary</h5>
        {items > 0 ? (
          <div>
            {Cart.items.map((item, index) => {
              const product = Data.find((product) => product.id === item.id);
              return <CartCard key={index} product={product} />;
            })}
            <h5 className="d-flex justify-content-center">
              Total Price: {totalPrice} LE
            </h5>
            <div className="btns mt-4 d-flex align-items-center">
              <button className="btn reviewcart me-4">Review Cart</button>
              <button className="btn checkout">Complete Checkout</button>
            </div>
          </div>
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </>
  );
};

export default CartSummary;
