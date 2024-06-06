import { Data } from "./Data";

const Cart = {
  items: [],

  getCartLength() {
    return this.items.length;
  },

  getTotalPrice() {
    return this.items.reduce((total, item) => {
      const product = Data.find((product) => product.id === item.id);
      return total + product.price * item.quantity;
    }, 0);
  },
};

export default Cart;
