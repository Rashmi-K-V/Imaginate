import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen  bg-gradient-to-b from-teal-50 to-orange-50 ">
      {/* Add Navigation */}
      <ToastContainer position="bottom-right" />
      <NavBar />
      {showLogin && <Login />}
      {/* Add Routing */}
      <Routes>
        <Route path="/" element={<Home />} /> {/*Home page route*/}
        <Route path="/result" element={<Result />} /> {/*Result page route*/}
        <Route path="/buy" element={<BuyCredit />} /> {/*buyCredit page route*/}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
