import Dish from "./Dish";
import "./styles/Specials.css";

function Specials() {
  return (
    <div className="specials">
      <div className="specials-header">
        <h1>This weeks Specials!</h1>
        <div className="">
          <butto className="btn button-container-specials">Online Menu</butto>
        </div>
      </div>

      <Dish />
    </div>
  );
}

export default Specials;
