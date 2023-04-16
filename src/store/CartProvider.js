import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addMealToCart = (item) => {};
  const removeMealFromCart = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addMeal: addMealToCart,
    revmoveMeal: removeMealFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
