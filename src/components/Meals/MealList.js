const MealList = (props) => {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <p className="description">{props.description}</p>
        <h4 className="price">Rs.{props.price}</h4>
      </div>
      <div className="item">
        <label>amount</label>
        <input defaultValue={1} max={10} min={1} className="item-input"></input>
        <button> + Add </button>
      </div>
      <hr></hr>
    </li>
  );
};

export default MealList;
