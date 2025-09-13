import { createContext, useState } from "react";

export const AppContext = createContext();

//Create a context provider component

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null); // null means logged out

  const [showLogin, setShowLogin] = useState(false);

  //state to add,view from backend token,if any token is available in browser local storage
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [credit, setCredit] = useState(false);

  //variable to store backend url
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  //pass variable and function in value
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURL,
    setToken,
    token,
    credit,
    setCredit,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
