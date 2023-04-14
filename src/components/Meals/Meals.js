import "./Meals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  return (
    <ul className="meals">
      {DUMMY_MEALS.map((meal) => (
        <li>
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <h4 className="price">Rs.{meal.price}</h4>
          <hr></hr>
        </li>
      ))}
    </ul>
  );
};

export default Meals;
