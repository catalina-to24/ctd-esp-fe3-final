import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";
import Button from "./Button";
import { useContextState } from "./utils/global.context";

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContextState();
  return (
    <nav className={state.theme}>
      <div>
        <h2>
          <span className="red">D</span>H Odonto
        </h2>
      </div>
      <div className="buttonNavBar">
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contact</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favs</h4>
        </Link>

        <Button handleClick={() => navigate(-1)}>Back</Button>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.theme === "light" ? "🌙" : "🌞"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <Button
          handleClick={() => dispatch({ type: "ADD_CART", payload: item })}
        >
          🛒
        </Button>
      ) : (
        <Button
          handleClick={() =>
            dispatch({ type: "DELETE_CART", payload: item.id })
          }
        ></Button> */
}
