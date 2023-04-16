const MealList = ({ name, description, price, onMealsAdd }) => {
  let newAmount = 1;
  const amountHandler = (event) => {
    event.preventDefault();
    newAmount = event.target.value;
  };
  const mealsAddHandler = (e) => {
    e.preventDefault();
    newAmount = newAmount * price;
    let obj = {
      name: name,
      description: description,
      price: price,
      amount: newAmount,
    };
    onMealsAdd(obj);
  };
  return (
    <li>
      <form onSubmit={mealsAddHandler}>
        <div>
          <h2>{name}</h2>
          <p className="description">{description}</p>
          <h3 className="price">Rs.{price}</h3>
        </div>
        <div className="item">
          <label>amount</label> <span> </span>
          <input
            type="number"
            onChange={amountHandler}
            defaultValue="1"
            max="10"
            min="1"
            className="item-input"
          ></input>
          <br />
          <br />
          <button type="submit"> + Add </button>
        </div>
        <hr></hr>
      </form>
    </li>
  );
};

export default MealList;
