import React from "react";
import { Link, useLocation } from "react-router-dom";
import dentistImg from "/public/images/doctor.jpg";
import { useContextState } from "../Components/utils/global.context";

const Card = ({ dentist }) => {
  const { name, username } = dentist;
  const addFav = () => {
    dispatch({ type: "ADD_FAVS", payload: dentist});
  };

  const { dispatch } = useContextState();
  const location = useLocation();

  return (
    <div className="card">
      <Link to={"/detail/" + dentist.id}>
        <img src={dentistImg} alt={username} className="card-img"/>
        <h4>{name}</h4>
        <h3>{username}</h3>
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
