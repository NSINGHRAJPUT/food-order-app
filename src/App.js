import { Fragment } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <Meals />
    </Fragment>
  );
}

export default App;
