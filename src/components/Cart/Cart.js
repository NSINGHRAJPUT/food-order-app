import "./Cart.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    cartCtx.removeItem(e.target.value)
  }
  let finalPrice=0;
  let cartItems = cartCtx.items;
  cartItems.map((item) => (finalPrice = finalPrice + item.price*item.amount));
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartCtx.items.map((item) => (
        <div className="cart">
          <ul className="title">
            <h2>{item.name}</h2>
          </ul>
          <div className="amount-price">
            <div>
              <div>x{item.amount}</div>
              <div>{item.price * item.amount}</div>
            </div>
            <div className="cart-btn">
              <button className="subtract" value={item.id} onClick={removeItemHandler}>-</button>
              <button className="add" value = {item.id} >+</button>
            </div>
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
