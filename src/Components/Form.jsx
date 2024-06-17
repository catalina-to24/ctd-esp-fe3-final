import React, { useState } from "react";
import { Error } from "./Error";
import { Post } from "./Post";
import { useContextState } from "./utils/global.context";




const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const {state, dispatch} = useContextState()

  const handlerSubmit = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    e.preventDefault();
    if (user.name.trim().length > 5 && emailRegex.test(user.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div className= {state.theme}>
      <form onSubmit={handlerSubmit}>
        <div>
          <input
            placeholder="Nombre"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button>Sent</button>
      </form>

      {show && <Post user={user} />}

      {error && <Error />}
    </div>
  );
};

export default Form;
