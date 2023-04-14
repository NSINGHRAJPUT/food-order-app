import "./Header.css";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <>
      <div className="header">
        <h2>ReactMeals....</h2>
        <Cart item="0"></Cart>
      </div>
      <img
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt=""
        height={300}
        width={1500}
      ></img>
    </>
  );
};

export default Header;
