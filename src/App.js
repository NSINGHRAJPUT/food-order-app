import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

let cartMeals = [];
function App() {
  const [preMeals, setPreMeals] = useState(cartMeals);
  const [cartVisible, setCartVisible] = useState(false);

  const cartVisibleHandler = () => {
    setCartVisible(true);
  };

  const cartHideHandler = () => {
    setCartVisible(false);
  };
  const mealsAddHandler = (obj) => {
    console.log(obj);
    setPreMeals((prevMeal) => [obj, ...prevMeal]);
  };

  return (
    <Fragment>
      {cartVisible && <Cart onCloseCart={cartHideHandler} />}
      <Header onCartClick={cartVisibleHandler} preMeals={preMeals} />
      <MealsSummary />
      <Meals onMealsAdd={mealsAddHandler} />
    </Fragment>
  );
}

export default App;
