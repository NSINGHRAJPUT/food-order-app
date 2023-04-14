import "./Cart.css";

const Cart = ({ item }) => {
  return (
    <div className="cart">
      <img
        src="https://png.pngtree.com/png-clipart/20190603/original/pngtree-website-shopping-cart-png-image_11939.jpg"
        alt=""
        height={20}
        width={20}
      ></img>
      <span> </span> Your Cart <span> </span>
      <div className="item">{item}</div>
    </div>
  );
};

export default Cart;
