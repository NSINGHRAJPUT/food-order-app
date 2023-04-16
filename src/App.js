import { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartVisibleHandler = () => {
    setCartVisible(true);
  };

  const cartHideHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onCloseCart={cartHideHandler} />}
      <Header onCartClick={cartVisibleHandler} />
      <MealsSummary />
      <Meals />
    </CartProvider>
  );
}

export default App;
