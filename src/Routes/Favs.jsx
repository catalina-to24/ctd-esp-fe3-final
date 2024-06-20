import React from "react";
import Card from "../Components/Card";
import { useContextState } from "../Components/utils/global.context";


const Favs = () => {
  const { state, dispatch } = useContextState()
  const handleDeleteAll = () => {
    dispatch({ type: "DELETE_ALL" });
  };
  return (
    
    <div className= {`${state.theme} mainPage`}>
      <h1>Dentists Favs</h1>
      <button className="red delete" onClick={handleDeleteAll}>Delete All</button>
      <div className="card-grid">
      {state.favs.length > 0 ? state.favs.map((dentist) => (
          <Card dentist={dentist} key={dentist.id} />
        )) : <h3>Here you will see your favorites dentist and have direct accese to them.</h3>}
      </div>
    </div>
    
  );
};
export default Favs;
