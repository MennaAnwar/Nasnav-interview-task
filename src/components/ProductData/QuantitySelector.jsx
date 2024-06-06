import React, { Component } from "react";

class QuantitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1, // Default quantity
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1,
    }));
  };

  render() {
    const { quantity } = this.state;

    return (
      <div className="quantity-selector d-flex align-items-center justify-content-between">
        <button className="circle" onClick={this.handleDecrement}>
          <span className="symbol">−</span>
        </button>
        <span id="quantity" className="quantity" value={quantity}>
          {quantity}
        </span>
        <button className="circle" onClick={this.handleIncrement}>
          <span className="symbol">+</span>
        </button>
      </div>
    );
  }
}

export default QuantitySelector;
