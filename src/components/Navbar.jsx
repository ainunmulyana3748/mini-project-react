import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="bg-black text-white font-semibold py-4 px-4">
      <nav className="flex justify-end gap-4 container">
        <Link>Home</Link>
        {!token ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link to={"/login"} onClick={handleLogout}>
            Logout
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
