import "./Cart.css";
import Modal from "../UI/Modal";

const Cart = () => {
  return (
    <Modal>
      <div className="cart">
        <ul className="title">
          <li>Sushi</li>
        </ul>
        <div className="amount">
          <h2>Total Amount</h2>
          <h2>35.62</h2>
        </div>
        <div className="button-btn">
          <button>Close</button>
          <button>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
