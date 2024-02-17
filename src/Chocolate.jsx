import { Link } from "react-router-dom";

const Chocolate = () => {
  return (
    <div>
      <h1>YOU BOUGHT A CHOCOLATE!</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/332/332961.png" />
      <Link to="/">
        <button>GO BACK TO VENDING MACHINE</button>
      </Link>
    </div>
  );
};

export default Chocolate;
