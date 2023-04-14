const MealList = (props) => {
  return (
    <li>
      <div>
        <h2>{props.name}</h2>
        <p className="description">{props.description}</p>
        <h3 className="price">Rs.{props.price}</h3>
      </div>
      <div className="item">
        <label>amount</label> <span> </span>
        <input defaultValue={1} max={10} min={1} className="item-input"></input>
        <br />
        <br />
        <button> + Add </button>
      </div>
      <hr></hr>
    </li>
  );
};

export default MealList;
