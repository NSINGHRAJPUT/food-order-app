import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const cartVisibleHandler = () => {
    setCartVisible(true);
  };

  const cartHideHandler = () => {
    setCartVisible(false);
  };

  return (
    <Fragment>
      {cartVisible && <Cart onCloseCart={cartHideHandler} />}
      <Header onCartClick={cartVisibleHandler} />
      <MealsSummary />
      <Meals />
    </Fragment>
  );
}

export default App;
