import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Habitdetails = () => {
  const { id } = useParams(); // Get id from URL
  const habit = useSelector((state) =>
    state.habits.items.find((h) => h.id === parseInt(id))
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-8">
      {habit ? (
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {habit.title}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{habit.description}</p>
        </>
      ) : (
        <div className="text-center">
          <p className="text-xl text-red-500 mb-4">Habit not found.</p>
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600  transition-all duration-300"
          >
            Go back to the homepage
          </Link>
        </div>
      )}
    </div>
  );
};

export default Habitdetails;
