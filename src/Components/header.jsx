import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      {/* Logo and Heading */}
      
        <h1 className="text-lg sm:text-2xl font-bold font-serif italic">Habit Tracker</h1>
     

      {/* Add Habit Button */}
      <Link
        to="/add"
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 text-sm sm:text-base "
      >
        Add Habit
      </Link>
    </div>
  </header>
);

export default Header;
