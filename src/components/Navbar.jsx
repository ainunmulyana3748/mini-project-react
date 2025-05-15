import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <header className="bg-black text-white w-full shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          Ditemenin.
        </Link>

        <nav className="flex gap-6 text-sm sm:font-semibold">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/tour-guide" className="hover:text-gray-300">
            Our Tour Guide
          </Link>
        </nav>

        <div>
          {!token ? (
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded transition text-sm sm:text-base"
            >
              Login
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition text-sm sm:text-base"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
