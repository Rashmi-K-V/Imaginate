import { createContext, useState } from "react";

export const AppContext = createContext();

//Create a context provider component

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null); // null means logged out

  //pass variable and function in value
  const value = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
