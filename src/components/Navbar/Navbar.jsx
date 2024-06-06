import React, { Component } from "react";
import "./Navbar.scss";
import Cart from "../../services/Cart";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartLength: Cart.getCartLength(),
    };
  }

  componentDidMount() {
    // Optionally set an interval to periodically update the cart length
    this.interval = setInterval(() => {
      this.setState({ cartLength: Cart.getCartLength() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
              <i className="bx bx-phone-call"></i>
              <span>Contact Us</span>
            </a>
            <a href="#">
              <i className="bx bx-cart"></i>
              <span>Track Order</span>
            </a>
            <a href="#">
              <i className="bx bx-current-location"></i>
              <span>Find A Store</span>
            </a>
          </div>
        </div>
        <div className="main-nav">
          <div className="form-group has-search">
            <i className="bx bx-search form-control-feedback"></i>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <div className="brand-logo">
            <img src="/images/adidas.svg" alt="Adidas" />
          </div>
          <div className="nav-actions">
            <div className="cart">
              <span className="cart-count">{this.state.cartLength}</span>
              <i className="bx bx-shopping-bag me-2"></i>
              <span>Cart</span>
            </div>
            <div className="wishlist">
              <i className="bx bx-heart"></i>
              <span>Wishlist</span>
            </div>
            <div className="login">
              <i className="bx bx-user"></i>
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
