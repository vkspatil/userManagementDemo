import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 py-4 px-6 shadow-lg border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          <Link
            to="/"
            className="hover:text-teal-500 transition-all duration-300 transform hover:scale-105"
          >
            User Management
          </Link>
        </h1>
        <button
          className="sm:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-16 left-0 w-full bg-white sm:bg-transparent shadow-lg sm:shadow-none`}
        >
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 p-4 sm:p-0 justify-end">
            <li>
              <Link
                to="/users"
                className="text-lg font-medium text-gray-600 hover:text-teal-500 transition-colors duration-300 transform hover:scale-105"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="text-lg font-medium text-gray-600 hover:text-teal-500 transition-colors duration-300 transform hover:scale-105"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-medium text-gray-600 hover:text-teal-500 transition-colors duration-300 transform hover:scale-105"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
