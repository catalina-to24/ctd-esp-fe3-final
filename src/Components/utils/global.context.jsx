import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

const themes = {
  LIGTH: "light",
  DARK: "dark",
};

export const initialState = { theme: themes.LIGTH, data: [], favs: []};
export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme == themes.LIGTH ? themes.DARK : themes.LIGTH,
      };
    case "GET_DENTIST":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_FAVS":
      return { 
        ...state, favs: [...state.favs, action.payload] 
      };
    case "DELETE_FAVS":
      const filteredFavs = state.favs.filter(
        (user) => user.id != action.payload
      );
      return { 
        ...state, favs: filteredFavs
       };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((response) =>
        dispatch({ type: "GET_DENTIST", payload: response.data })
    )
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextState = () => useContext(ContextGlobal);



