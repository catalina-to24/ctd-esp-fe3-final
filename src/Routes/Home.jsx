import React from "react";
import Card from "../Components/Card";
import { useContextState } from "../Components/utils/global.context";


const Home = () => {
  const { state } = useContextState()
  return (
    <main className= {state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* {state.dentist.map((dentist) => (
          <Card dentist={dentist} key={dentist.id}/>
        ))} */}
        
      </div>
    </main>
  );
};

export default Home;
