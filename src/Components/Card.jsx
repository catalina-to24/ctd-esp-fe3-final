import React from "react";
import { useLocation } from "react-router-dom";
import doctor from "/public/images/doctor.jpg";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  // const { dispatch } = useRecipeStates();
  const location = useLocation();

  return (
    <div className={CardStyles.cardContainer}>
      <Link to={"/detail/" + id}>
        <h4>{name}</h4>
        <h3>{username}</h3>
        <img src={doctor} alt={title} className={CardStyles.cardImg} />
      </Link>

      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
