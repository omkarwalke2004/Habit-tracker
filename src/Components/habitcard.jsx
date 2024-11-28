import React from 'react';
import { Link } from 'react-router-dom';

const HabitCard = ({ habit,onDelete }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-white to-gray-100 flex flex-col justify-between h-full transform hover:-translate-y-1 duration-300">
      {/* Habit Title and Description */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
          {habit.title}
        </h2>
        <p className="text-gray-700 mt-3 font-serif text-sm md:text-base leading-relaxed">
          {habit.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        {/* Details Button */}
        <Link to={`/details/${habit.id}`} className="text-sm md:text-base text-blue-500 font-medium hover:underline transition-all">
          Details
        </Link>
        
        {/* Edit and Delete Buttons */}
        <div className="flex space-x-4">
          <Link to={`edit/${habit.id}`}
            className="text-sm md:text-base text-white bg-green-500 px-4 py-2 rounded-md shadow-md hover:bg-green-600 hover:scale-105 transition-transform duration-300"
          >
            Edit
          </Link>
          <button onClick={()=> onDelete(habit.id)}
            className="text-sm md:text-base text-white bg-red-500 px-4 py-2 rounded-md shadow-md hover:bg-red-600 hover:scale-105 transition-transform duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
