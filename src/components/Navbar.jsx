import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white w-full shadow-md z-50 fixed">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          Ditemenin.
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm sm:font-semibold">
          <Link to="/landing-page" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Our Tour Guide
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:block">
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full px-4 py-4 bg-black z-40 space-y-4 text-sm font-medium shadow-lg"
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Link
              to="/landing-page"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/"
              className="block text-white hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Tour Guide
            </Link>
            {!token ? (
              <Link
                to="/login"
                className="block bg-green-500 hover:bg-green-600 text-white text-center px-4 py-2 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <Link
                to="/login"
                className="block bg-red-500 hover:bg-red-600 text-white text-center px-4 py-2 rounded"
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
              >
                Logout
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
