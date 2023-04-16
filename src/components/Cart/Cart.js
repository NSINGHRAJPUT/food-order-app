import "./Cart.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);
  let cartItems = cartCtx.items;
  console.log(cartItems);
  let finalPrice = 0;
  cartItems.map((item) => (finalPrice = finalPrice + item.price));
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems.map((item) => (
        <div className="cart">
          <ul className="title">
            <h2>{item.name}</h2>
          </ul>
          <div className="amount-price">
            <div>{item.amount}</div>
            <div>{item.price * item.amount}</div>
          </div>
        </div>
      ))}
      <div className="amount">
        <h2>Total price</h2>
        <h2>{Math.floor(finalPrice)}</h2>
      </div>
      <div className="button-btn">
        <button onClick={onCloseCart}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
