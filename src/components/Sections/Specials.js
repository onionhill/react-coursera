import FoodItem from "./FoodItem";

function Specials() {
  return (
    <>
      <h2>This weeks Specials!</h2>
      <button>Online Menu</button>
      <h3>Chicago</h3>
      <div className="FoodItems">
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </div>
    </>
  );
}

export default Specials;
