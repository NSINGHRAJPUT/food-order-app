import { Fragment } from "react";
import mealsImage from "../../assets/meals.png";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onCartClick={props.onCartClick}
          preMeals={props.preMeals}
        />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
