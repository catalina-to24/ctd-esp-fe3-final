import React from "react";
import { Link, useLocation } from "react-router-dom";
import dentistImg from "/images/doctor.jpg";
import { useContextState } from "../Components/utils/global.context";

const Card = ({ dentist }) => {
  const { name, username } = dentist;
  const { state, dispatch } = useContextState();
  const location = useLocation();

const isFav = state.favs.some(fav => fav.id === dentist.id);

  const addFav = () => {
    dispatch({ type: "ADD_FAVS", payload: dentist});
  };

  const removeFav = () => {
    dispatch({ type: "DELETE_FAVS", payload: dentist.id });
  };

  return (
    <div className="card">
      <Link to={"/detail/" + dentist.id}>
        <img src={dentistImg} alt={username} className="card-img"/>
        <h4>{name}</h4>
        <h3>{username}</h3>
      </Link>

      <button onClick={isFav ? removeFav : addFav} className="favButton">
        {isFav ? '❌' : '⭐'}
      </button>
    </div>
  );
};

export default Card;
