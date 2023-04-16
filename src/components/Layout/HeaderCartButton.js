import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onCartClick} className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{props.preMeals.length}</span>
    </button>
  );
};

export default HeaderCartButton;
