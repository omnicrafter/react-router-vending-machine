import { Link } from "react-router-dom";

const Gum = () => {
  return (
    <div>
      <h1>YOU BOUGHT SOME GUM!</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/287/287062.png" />
      <Link to="/">
        <button>GO BACK TO VENDING MACHINE</button>
      </Link>
    </div>
  );
};

export default Gum;
