import { useState } from "react";
import CartContext from "./cart-context";

const items = [];
const CartProvider = (props) => {
  const [cartState, SetCartState] = useState(items);

  const addMealToCart = (item) => {
    SetCartState((preState) => {
      return [item, ...preState];
    });
  };
  const removeMealFromCart = (id) => {};

  const cartContext = {
    items: cartState,
    totalAmount: 0,
    addItem: addMealToCart,
    removeItem: removeMealFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
