import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const themes = {
  LIGTH: "light",
  DARK: "dark",
};

export const initialState = { theme: themes.LIGTH, data: [] };
// export const initialState = {theme: "", doctor: [], favs:[], data: []}


export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme == themes.LIGTH ? themes.DARK : themes.LIGTH,
      };
    case "UPDATE_DENTIST":
      return {
        ...state, data: action.payload
      }  
    default:
      return state;
 //     case "GET_FAVS":
//       return { ...state, doctor: action.payload };
//     case "ADD_FAVS":
//       return { ...state, favs: [...state.favs, action.payload] }; 
//     case "DELETE_FAVS":
//       const filteredFavs = state.favs.filter(
//         (user) => user.id != action.payload
//       );
//       return { ...state, favs: filteredFavs };
 
  }
};

export const ContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState)

const url = "https://jsonplaceholder.typicode.com/users"

useEffect(() => {
  axios(url)
  .then(response => dispatch({type: "UPDATE_DENTIST", payload: response.data.dentist}))
 .catch((err) => console.log(err));
  }, []);

  return <ContextGlobal.Provider value={{state, dispatch}}>{children}</ContextGlobal.Provider>;
};

export const useContextState = () => useContext(ContextGlobal);
// const reducer = (state, action) => {
//   //Recibe por parametro el estado y lo que mandé desde el dispatch (action)
//   switch (action.type) {
//     case "GET_FAVS":
//       return { ...state, doctor: action.payload };
//     case "ADD_FAVS":
//       return { ...state, favs: [...state.favs, action.payload] }; 
//     case "DELETE_FAVS":
//       const filteredFavs = state.favs.filter(
//         (user) => user.id != action.payload
//       );
//       return { ...state, favs: filteredFavs };
//   }
// };

// const ContextProvider = ({ children }) => {
//   //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const url = "https://jsonplaceholder.typicode.com/users";

//   useEffect(() => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) =>
//         dispatch({ type: "GET_FAVS", payload: data.doctor })
//       )
//       .catch((error) => console.log("Fetch error: ", error));
//   }, [url]);

//   const contextValue = useMemo(() => ({ state }), [state]);

//   return (
//     <ContextGlobal.Provider value={{state, contextValue }}>
//       {children}
//     </ContextGlobal.Provider>
//   );
// };

// export default ContextProvider;

// export const useContextGlobal = () => useContext(useContextGlobal);

