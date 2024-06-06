import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="top-bar">
          <div className="logo d-flex ">
            <img src="/images/menu.svg" alt="menu" className="menu me-3" />
            <img src="/images/logo-dark.svg" alt="Logo" />
          </div>
          <div className="announcement">
            <a href="#">
              Valentine's Day Offers! Buy Two Get One Free <span>Shop Now</span>
            </a>
          </div>
          <div className="actions">
            <a href="#">
              <i class="bx bx-phone-call"></i>
              <span>Contact Us</span>
            </a>
            <a href="#">
              <i class="bx bx-cart"></i>
              <span>Track Order</span>
            </a>
            <a href="#">
              <i class="bx bx-current-location"></i>
              <span>Find A Store</span>
            </a>
          </div>
        </div>
        <div className="main-nav">
          <div class="form-group has-search">
            <i class="bx bx-search form-control-feedback"></i>
            <input type="text" class="form-control" placeholder="Search" />
          </div>
          <div className="brand-logo">
            <img src="/images/adidas.svg" alt="Adidas" />
          </div>
          <div className="nav-actions">
            <div className="cart">
              <span className="cart-count">0</span>
              <i class="bx bx-shopping-bag me-2"></i>
              <span>Cart</span>
            </div>
            <div className="wishlist">
              <i class="bx bx-heart"></i>
              <span>Wishlist</span>
            </div>
            <div className="login">
              <i class="bx bx-user"></i>
              <span>Login</span>
            </div>
          </div>
        </div>
        <div className="sub-nav">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Unisex</a>
          <a href="#">Kids</a>
          <a href="#">Best Sellers</a>
          <a href="#">New Arrivals</a>
          <a href="#" className="offers">
            Offers
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
