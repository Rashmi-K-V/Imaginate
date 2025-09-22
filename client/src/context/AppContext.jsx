import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

//Create a context provider component

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null); // null means logged out

  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);

  //state to add,view from backend token,if any token is available in browser local storage
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [credit, setCredit] = useState(false);

  //variable to store backend url
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  //To get credits dynamically using api
  const loadCreditsData = async () => {
    try {
      //credits api
      const { data } = await axios.get(backendURL + "/api/user/credits", {
        headers: { token },
      });

      //check response
      if (data.success) {
        setCredit(data.credit);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const generateImage = async (prompt) => {
    //api call for generation

    try {
      //image generate api call

      const { data } = await axios.post(
        backendURL + "/api/image/generate-image",
        { prompt },
        {
          headers: { token },
        }
      );

      if (data.success) {
        loadCreditsData(); //display new credit after usage
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          //redirect user to buy credits page
          navigate("/buy");
        }
      }
    } catch (erorr) {
      toast.error(erorr.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

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
    logout,
    loadCreditsData,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
