import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipes</Link>

      {!cookies.access_token ? (
        <Link to={"/auth"}>Login/Register</Link>
      ) : (
        <>
          <Link to={"/saved-recipes"}>Saved Recipes</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
