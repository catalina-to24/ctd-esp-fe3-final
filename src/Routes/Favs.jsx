import React from "react";
import Card from "../Components/Card";
import { useContextState } from "../Components/utils/global.context";


const Favs = () => {
  const { state } = useContextState()

  return (
    
    <div className= {state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favs.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        ))}
      </div>
    </div>
    
  );
};
{/* este componente debe consumir los destacados del localStorage */}

export default Favs;
